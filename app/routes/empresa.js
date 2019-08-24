const {Empresa, Usuario, Evento} = require('../models')
const query = require('../util/query')
const eventosPreDefinidos = require('../models/evento').eventosPreDefinidos

module.exports.list = async (req, res) => {
    res.send(await Empresa.findAll({...query.removeTimestamp()}))
}

module.exports.findById = async (req, res) => {
    const result = await Empresa.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const result = await Empresa.create(req.body)

        eventosPreDefinidos.forEach(async v => await Evento.create({...v, idEmpresa: result.id}))

        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Empresa.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Empresa.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Empresa.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
