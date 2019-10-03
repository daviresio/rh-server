const {ValorRecorrente, Colaborador} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await ValorRecorrente.findAll({...query.removeTimestamp(), include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await ValorRecorrente.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador: ValorRecorrenteId, ...data} = req.body
        const result = await ValorRecorrente.create(addIdEmpresa({...data, ValorRecorrenteId}, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await ValorRecorrente.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await ValorRecorrente.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await ValorRecorrente.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
