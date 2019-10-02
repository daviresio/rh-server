const {Evento, FechamentoFolhaItem, TipoProvento} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    let params = {where: {idEmpresa: req.authData.empresa}};
    if (req.query.campoAtivo) params = {where: {...params.where, ...req.query}};
    Object.keys(params.where).forEach(k => {
        if(params.where[k] === 'true') params.where[k] = true
    })
    const result = await Evento.findAll({...params, ...getParams})
    res.send(result)
}

module.exports.findById = async (req, res) => {
    const result = await Evento.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {tipo, ...data} = req.body
        const result = await Evento.create(addIdEmpresa(data, req.authData.empresa))
        await result.setTipoProvento(tipo)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await Evento.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Evento.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Evento.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

const getParams = {
    include: [
        {
            model: FechamentoFolhaItem,
            as: 'fechamentoFolhaItens',
            attributes: {exclude: ['createdAt', 'updatedAt']},
        }, {
            model: TipoProvento,
            as: 'tipo',
            attributes: {exclude: ['createdAt', 'updatedAt']},
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};