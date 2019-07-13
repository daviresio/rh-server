const {Configuracao, ConfiguracaoFolha, ConfiguracaoDecimoTerceiro} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Configuracao.findAll({...query.removeTimestamp()}))
}

module.exports.findById = async (req, res) => {
    const result = await Configuracao.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {folha, decimoTerceiro, ...data} = req.body
        const result = await Configuracao.create(data)
        await result.setConfiguracaoFolha(folha)
        await result.setConfiguracaoDecimoTerceiro(decimoTerceiro)
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
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
                const folhaCreated = await ConfiguracaoFolha.create(folha)
                await result.setConfiguracaoFolha(folhaCreated.id)
            }
        }
        if (decimoTerceiro) {
            if (decimoTerceiro.id) {
                await ConfiguracaoDecimoTerceiro.update(decimoTerceiro, {where: {id: decimoTerceiro.id}})
            } else {
                const decimoTerceiroCreated = await ConfiguracaoDecimoTerceiro.create(decimoTerceiro)
                await result.setConfiguracaoFolha(decimoTerceiroCreated.id)
            }
        }
        res.send(result)
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Configuracao.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
