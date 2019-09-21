const {FechamentoFolha, FechamentoFolhaItem, Colaborador, Evento, FechamentoFolhaColaborador} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await FechamentoFolha.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await FechamentoFolha.findByPk(req.params.id, getParams)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const colaboradores = await Colaborador.findAll({where: {idEmpresa: req.authData.empresa}, raw: true}).map(x => x.id)
        console.log('***********', colaboradores)
        const result = await FechamentoFolha.create({...addIdEmpresa({...req.body}, req.authData.empresa), dataInicio: Date.now()})
        colaboradores.forEach(async c => {
            await FechamentoFolhaColaborador.create({
                FechamentoFolhaId: result.id,
                FechamentoFolhaColaboradorId: c,
                idEmpresa: req.authData.empresa,
            })
        })
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await FechamentoFolha.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await FechamentoFolha.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}


module.exports.delete = async (req, res) => {
    await FechamentoFolha.destroy({where: {id: req.params.id}})
    res.status(200).send()
}



module.exports.saveItem = async (req, res, next) => {
    try {
        const {body: data} = req
        data.forEach(async v => {
            await FechamentoFolhaItem.create(addIdEmpresa(v, req.authData.empresa))
        })
        res.status(200).send()
    } catch (e) {
        next(e)
    }
}

module.exports.getWithCalc = async (req, res, next) => {
    try {
    const result = await FechamentoFolha.findByPk(req.params.id, query.removeTimestamp(), getParams)
res.send(result)
    } catch (e) {
        next(e)
    }
}


const getParams = {
    include: [
        {
            model: Colaborador,
            as: 'colaboradores',
            attributes: {exclude: ['createdAt', 'updatedAt']},
            include: [
                {
                    model: FechamentoFolhaItem,
                    as: 'fechamentoFolhaItens',
                    attributes: {exclude: ['createdAt', 'updatedAt']},
                    include: [
                        {
                            model: Evento,
                            as: 'evento',
                            attributes: {exclude: ['createdAt', 'updatedAt']}
                        },
                    ]
                }
            ]
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};