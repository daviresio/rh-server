const {Falta, Colaborador, MotivoFaltaAfastamento, TipoFaltaAfastamento} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Falta.findAll({...getParams, include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Falta.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador, motivo, tipo, ...data} = req.body
        console.log(colaborador, data)
        const result = await Falta.create(addIdEmpresa(data, req.authData.empresa))
        await result.setColaborador(colaborador)
        await result.setMotivoFaltaAfastamento(motivo)
        await result.setTipoFaltaAfastamento(tipo)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    console.log(req.body)
    try {
        await Falta.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Falta.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Falta.destroy({where: {id: req.params.id}})
    res.status(200).send()
}


const getParams = {
    include: [
        {
            model: MotivoFaltaAfastamento,
            as: 'motivo',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }, {
            model: TipoFaltaAfastamento,
            as: 'tipo',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
