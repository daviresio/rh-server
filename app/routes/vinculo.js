const {Vinculo} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Vinculo.findAll({...query.removeTimestamp()}))
}

module.exports.findById = async (req, res) => {
    const result = await Vinculo.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const result = await Vinculo.create(addIdEmpresa(req.body, req.authData.empresa))
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Vinculo.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Vinculo.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Vinculo.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
