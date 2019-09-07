const {Ferias, Colaborador, Empresa, Contador} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa
const fila = require('../../config/mqService')

module.exports.list = async (req, res) => {
    let params = {where: {idEmpresa: req.authData.empresa}}
    if (req.query.status) params = {where: {...params.where, ...req.query}}
    res.send(await Ferias.findAll({...getParams}))
}

module.exports.findById = async (req, res, next) => {
    try {
        const result = await Ferias.findByPk(req.params.id, {...getParams})
        console.log(result)
    } catch (e) {
        next(e)
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador, ...data} = req.body
        const result = await Ferias.create(addIdEmpresa(data, req.authData.empresa))
        await result.setColaborador(colaborador)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    console.log(req.body)
    try {
        await Ferias.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Ferias.findByPk(req.body.id, {...getParams})
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.enviarParaContabilidade = async (req, res, next) => {
    try {
        const {contador, ...data} = req.body
        await Ferias.update({...data, enviadoParaContabilidadeConcluido: 'APROVADA', FeriasContadorId: contador}, {
            where: {
                id: req.body.id
            }
        })
        const empresa = await Empresa.findByPk(req.authData.empresa)
        const result = await Ferias.findByPk(req.body.id, {...getParams})
        const {colaborador, contador: contad, ...ferias} = result.get({plain: true})
        fila.send(fila.queue.MAIL_QUEUE, result.contador.email, fila.type.MAIL_CONTADOR_SOLICITAR_FERIAS, {
            ferias,
            colaborador,
            contador: contad,
            empresa: empresa.get({plain: true})
        })
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Ferias.destroy({where: {id: req.params.id}})
    res.status(200).send()
}


const getParams = {
    include: [
        {
            model: Colaborador,
            as: 'colaborador',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Contador,
            as: 'contador',
            attributes: {exclude: ['createdAt', 'updatedAt', 'FeriasContadorId', 'ferias']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}

