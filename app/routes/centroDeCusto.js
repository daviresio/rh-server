const {CentroDeCusto} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await CentroDeCusto.findAll({...query.removeTimestamp(), where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await CentroDeCusto.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const result = await CentroDeCusto.create(addIdEmpresa(req.body, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await CentroDeCusto.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await CentroDeCusto.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await CentroDeCusto.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
