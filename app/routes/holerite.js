const {Holerite} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Holerite.findAll({...query.removeTimestamp()}))
}

module.exports.findById = async (req, res) => {
    const result = await Holerite.findByPk(req.params.id, ...query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        await result.setColaborador({...req.body})
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Holerite.update({...req.body}, {
            where: {
                id: req.body.id
            }, ...query.removeTimestamp()
        })
        const result = await Holerite.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Holerite.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
