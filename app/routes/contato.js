const {Contato, Colaborador} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Contato.findAll({...query.removeTimestamp(), include: [{model: Colaborador, as: 'colaborador'}]}))
}

module.exports.findById = async (req, res) => {
    const result = await Contato.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {colaborador, ...data} = req.body
        const result = await Contato.create(data)
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Contato.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Contato.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Contato.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

module.exports.listByColaborador = async (req, res) => {
    res.send(await Contato.findAll({where: {ContatoId: req.params.id}, attributes: {exclude: ['ContatoId', 'createdAt', 'updatedAt']}}))
}
