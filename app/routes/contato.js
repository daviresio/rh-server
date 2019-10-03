const {Contato, Colaborador, RelacaoContato} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Contato.findAll({...getParams, include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Contato.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador: ContatoId, relacao: RelacaoContatoId, ...data} = req.body
        const result = await Contato.create(addIdEmpresa({...data, ContatoId, RelacaoContatoId}, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    console.log(req.body)
    try {
        await Contato.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Contato.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Contato.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

module.exports.listByColaborador = async (req, res) => {
    res.send(await Contato.findAll({where: {ContatoId: req.params.id}, attributes: {exclude: ['ContatoId', 'createdAt', 'updatedAt']}}))
}



const getParams = {
    include: [
        {
            model: RelacaoContato,
            as: 'relacao',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
