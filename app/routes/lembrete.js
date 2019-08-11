const {Lembrete} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Lembrete.findAll({...query.removeTimestamp(), where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Lembrete.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {

    try {
        const result = await Lembrete.create({...addIdEmpresa(req.body, req.authData.empresa), termino: req.body.termino || req.body.inicio})
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Lembrete.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Lembrete.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Lembrete.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
