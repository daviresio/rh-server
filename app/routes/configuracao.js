const {Configuracao, ConfiguracaoFolha, ConfiguracaoDecimoTerceiro} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.list = async (req, res) => {
    res.send(await Configuracao.findAll({...query.removeTimestamp(), where: {idEmpresa: req.authData.empresa}}))
}

module.exports.findById = async (req, res) => {
    const result = await Configuracao.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res, next) => {
    try {
        const {folha: ConfiguracaoFolhaId, decimoTerceiro: ConfiguracaoDecimoTerceiroId, ...data} = req.body
        const result = await Configuracao.create(addIdEmpresa({...data, ConfiguracaoFolhaId, ConfiguracaoDecimoTerceiroId}, req.authData.empresa))
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        const {folha, decimoTerceiro, ...data} = req.body
        await Configuracao.update(data, {
            where: {
                id: req.body.id
            }
        })
        const result = await Configuracao.findByPk(req.body.id)
        if (folha) {
            if (folha.id) {
                await ConfiguracaoFolha.update(folha, {where: {id: folha.id}})
            } else {
                const folhaCreated = await ConfiguracaoFolha.create(addIdEmpresa(folha, req.authData.empresa))
                await result.setConfiguracaoFolha(folhaCreated.id)
            }
        }
        if (decimoTerceiro) {
            if (decimoTerceiro.id) {
                await ConfiguracaoDecimoTerceiro.update(decimoTerceiro, {where: {id: decimoTerceiro.id}})
            } else {
                const decimoTerceiroCreated = await ConfiguracaoDecimoTerceiro.create(addIdEmpresa(decimoTerceiro, req.authData.empresa))
                await result.setConfiguracaoFolha(decimoTerceiroCreated.id)
            }
        }
        res.send(result)
    } catch (e) {
        next(e)
    }
}

module.exports.delete = async (req, res) => {
    await Configuracao.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
