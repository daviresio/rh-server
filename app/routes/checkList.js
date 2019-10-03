const {CheckList, Colaborador} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await CheckList.findAll({...query.removeTimestamp(), include: [{model: Colaborador, as: 'colaborador'}], where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await CheckList.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const result = await CheckList.create(addIdEmpresa(req.body, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        await CheckList.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await CheckList.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await CheckList.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

module.exports.listByColaborador = async (req, res) => {
    res.send(await CheckList.findAll({where: {CheckListId: req.params.id}, attributes: {exclude:['createdAt', 'updatedAt']}}))
}
