const {Holerite, TipoHolerite} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Holerite.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Holerite.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {tipo, ...data} = req.body
        const result = await Holerite.create(addIdEmpresa(data, req.authData.empresa))
        await result.setTipoHolerite(tipo)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await Holerite.update({...req.body}, {
            where: {
                id: req.body.id
            }, ...getParams
        })
        const result = await Holerite.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Holerite.destroy({where: {id: req.params.id}})
    res.status(200).send()
}



const getParams = {
    include: [
        {
            model: TipoHolerite,
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
