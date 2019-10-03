const {Lembrete, CategoriaLembrete, PeriodoRecorrenciaLembrete} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Lembrete.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Lembrete.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const result = await Lembrete.create({...addIdEmpresa(req.body, req.authData.empresa), termino: req.body.termino || req.body.inicio})
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await Lembrete.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Lembrete.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Lembrete.destroy({where: {id: req.params.id}})
    res.status(200).send()
}



const getParams = {
    include: [
        {
            model: CategoriaLembrete,
            as: 'categoria',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }, {
            model: PeriodoRecorrenciaLembrete,
            as: 'periodoRecorrencia',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
