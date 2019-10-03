const {Salario, Colaborador, MotivoAlteracaoSalario} = require('../models')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Salario.findAll({...getParams, include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res, next) => {
    const result = await Salario.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador: SalarioId, motivo: MotivoAlteracaoSalarioId, ...data} = req.body
        const result = await Salario.create(addIdEmpresa({...data, SalarioId, MotivoAlteracaoSalarioId}, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    console.log(req.body)
    try {
        await Salario.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Salario.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Salario.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

const getParams = {
    include: [
        {
            model: MotivoAlteracaoSalario,
            as: 'motivo',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
