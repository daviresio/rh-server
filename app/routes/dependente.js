const {Dependente, Colaborador} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Dependente.findAll({...query.removeTimestamp(), include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Dependente.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {colaborador, ...data} = req.body
        const result = await Dependente.create(addIdEmpresa(data, req.authData.empresa))
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Dependente.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Dependente.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Dependente.destroy({where: {id: req.params.id}})
    res.status(200).send()
}


module.exports.listByColaborador = async (req, res) => {
    res.send(await Dependente.findAll({where: {DependenteId: req.params.id}, attributes: {exclude: ['DependenteId', 'createdAt', 'updatedAt']}}))
}
