const {Banco, Colaborador} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Banco.findAll({...query.removeTimestamp(['ColaboradorId']), include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Banco.findByPk(req.params.id, ...query.removeTimestamp(['ColaboradorId']))
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador, ...data} = req.body
        const result = await Banco.create(addIdEmpresa(data, req.authData.empresa))
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await Banco.update({...req.body}, {
            where: {
                id: req.body.id
            }, ...query.removeTimestamp(['ColaboradorId'])
        })
        const result = await Banco.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Banco.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
