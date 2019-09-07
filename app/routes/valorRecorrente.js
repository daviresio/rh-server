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

module.exports.save = async (req, res) => {
    try {
        const {colaborador, ...data} = req.body
        console.log(colaborador, data)
        const result = await ValorRecorrente.create(addIdEmpresa(data, req.authData.empresa))
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    console.log(req.body)
    try {
        await ValorRecorrente.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await ValorRecorrente.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await ValorRecorrente.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
