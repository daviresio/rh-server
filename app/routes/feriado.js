const {Feriado} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Feriado.findAll({...query.removeTimestamp(), where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Feriado.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const result = await Feriado.create(addIdEmpresa(req.body, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await Feriado.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Feriado.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Feriado.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

module.exports.restaure = async (req, res) => {
    try {
        await Feriado.destroy({where: {}, truncate: true})
        feriadosDefault.forEach(async v => await Feriado.create(v))
        res.status(200).send(await Feriado.findAll({...query.removeTimestamp()}))
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
}
