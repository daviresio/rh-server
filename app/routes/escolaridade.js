const {Escolaridade, Colaborador, NivelEscolaridade} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Escolaridade.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Escolaridade.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador, escolaridade, ...data} = req.body
        const result = await Escolaridade.create(addIdEmpresa(data, req.authData.empresa))
        await result.setColaborador(colaborador)
        await result.setNivelEscolaridade(escolaridade)
        res.send(result)
    } catch (e) {
        rnext(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await Escolaridade.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Escolaridade.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Escolaridade.destroy({where: {id: req.params.id}})
    res.status(200).send()
}



const getParams = {
    include: [
        {
            model: NivelEscolaridade,
            as: 'escolaridade',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }, {
            model: Colaborador,
            as: 'colaborador',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
