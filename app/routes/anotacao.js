const {Anotacao, CategoriaAnotacao} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Anotacao.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Anotacao.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador: AnotacaoId, categoria: CategoriaAnotacaoId, ...data} = req.body
        const result = await Anotacao.create(addIdEmpresa({...data, AnotacaoId, CategoriaAnotacaoId}, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res) => {
    try {
        await Anotacao.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Anotacao.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Anotacao.destroy({where: {id: req.params.id}})
    res.status(200).send()
}


const getParams = {
    include: [
        {
            model: CategoriaAnotacao,
            as: 'categoria',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
