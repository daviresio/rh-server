const {PeriodoExperiencia} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await PeriodoExperiencia.findAll({...query.removeTimestamp()}))
}

module.exports.findById = async (req, res) => {
    const result = await PeriodoExperiencia.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const result = await PeriodoExperiencia.create(req.body)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await PeriodoExperiencia.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await PeriodoExperiencia.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await PeriodoExperiencia.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
