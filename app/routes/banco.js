const {Banco, Colaborador} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Banco.findAll({...query.removeTimestamp(['ColaboradorId']), include: [{model: Colaborador, as: 'colaborador'}]}))
}

module.exports.findById = async (req, res) => {
    const result = await Banco.findByPk(req.params.id, ...query.removeTimestamp(['ColaboradorId']))
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {colaborador, ...data} = req.body
        const result = await Banco.create(data)
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Banco.update({...req.body}, {
            where: {
                id: req.body.id
            }, ...query.removeTimestamp(['ColaboradorId'])
        })
        const result = await Banco.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Banco.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
