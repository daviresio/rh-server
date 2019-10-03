const {FormaPagamento} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await FormaPagamento.findAll({...query.removeTimestamp()}))
}

module.exports.findById = async (req, res) => {
    const result = await FormaPagamento.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const result = await FormaPagamento.create(req.body)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await FormaPagamento.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await FormaPagamento.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await FormaPagamento.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
