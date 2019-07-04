const {Escolaridade, Colaborador} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Escolaridade.findAll({...query.removeTimestamp(), include: [{model: Colaborador, as: 'colaborador'}]}))
}

module.exports.findById = async (req, res) => {
    const result = await Escolaridade.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {colaborador, ...data} = req.body
        const result = await Escolaridade.create(data)
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Escolaridade.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Escolaridade.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Escolaridade.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
