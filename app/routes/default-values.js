const {TipoAdicionalSindicato, CalculoProporcionalidade, CalculoSaldoBeneficio, CategoriaBeneficio, CategoriaAnotacao,
    CorRaca, Sexo, EstadoCivil, MotivoAlteracaoSalario, MotivoFaltaAfastamento, TipoFaltaAfastamento, CategoriaLembrete,
    PeriodoRecorrenciaLembrete, RelacaoContato, RelacaoDependente, TipoAvisoPrevio, TipoDesligamento, TipoCalculoHoraExtra,
    NivelEscolaridade, TipoRecado, TipoProvento, TipoHolerite, ParcelasDecimoTerceiro, } = require('../models')

const query = require('../util/query')
const {getCache, setCache} = require('../../config/redis')

module.exports.listTipoAdicionalSindicato = async (req, res) => {
    res.send(await TipoAdicionalSindicato.findAll(query.removeTimestamp()))
}

module.exports.listCalculoProporcionalidade = async (req, res) => {
    res.send(await CalculoProporcionalidade.findAll(query.removeTimestamp()))
}

module.exports.listCalculoSaldoBeneficio = async (req, res) => {
    res.send(await CalculoSaldoBeneficio.findAll(query.removeTimestamp()))
}

module.exports.listCategoriaBeneficio = async (req, res) => {
    res.send(await CategoriaBeneficio.findAll(query.removeTimestamp()))
}

module.exports.listCategoriaAnotacao = async (req, res) => {
    res.send(await CategoriaAnotacao.findAll(query.removeTimestamp()))
}

module.exports.listCorRaca = async (req, res) => {
    res.send(await CorRaca.findAll(query.removeTimestamp()))
}

module.exports.listSexo = async (req, res) => {
    const value = await getCache('sexo')
    if(value) {
        res.send(JSON.parse(value))
    } else {
        const v = await Sexo.findAll(query.removeTimestamp())
        await setCache('sexo', JSON.stringify(v))
        res.send(v)
    }
}

module.exports.listEstadoCivil = async (req, res) => {
    res.send(await EstadoCivil.findAll(query.removeTimestamp()))
}

module.exports.listMotivoAlteracaoSalario = async (req, res) => {
    res.send(await MotivoAlteracaoSalario.findAll(query.removeTimestamp()))
}

module.exports.listMotivoFaltaAfastamento = async (req, res) => {
    res.send(await MotivoFaltaAfastamento.findAll(query.removeTimestamp()))
}

module.exports.listTipoFaltaAfastamento = async (req, res) => {
    res.send(await TipoFaltaAfastamento.findAll(query.removeTimestamp()))
}

module.exports.listCategoriaLembrete = async (req, res) => {
    res.send(await CategoriaLembrete.findAll(query.removeTimestamp()))
}

module.exports.listPeriodoRecorrenciaLembrete = async (req, res) => {
    res.send(await PeriodoRecorrenciaLembrete.findAll(query.removeTimestamp()))
}

module.exports.listRelacaoContato = async (req, res) => {
    res.send(await RelacaoContato.findAll(query.removeTimestamp()))
}

module.exports.listRelacaoDependente = async (req, res) => {
    res.send(await RelacaoDependente.findAll(query.removeTimestamp()))
}

module.exports.listTipoAvisoPrevio = async (req, res) => {
    res.send(await TipoAvisoPrevio.findAll(query.removeTimestamp()))
}

module.exports.listTipoDesligamento = async (req, res) => {
    res.send(await TipoDesligamento.findAll(query.removeTimestamp()))
}

module.exports.listTipoCalculoHoraExtra = async (req, res) => {
    res.send(await TipoCalculoHoraExtra.findAll(query.removeTimestamp()))
}

module.exports.listNivelEscolaridade = async (req, res) => {
    res.send(await NivelEscolaridade.findAll(query.removeTimestamp()))
}

module.exports.listTipoHolerite = async (req, res) => {
    res.send(await TipoHolerite.findAll(query.removeTimestamp()))
}

module.exports.listTipoProvento = async (req, res) => {
    res.send(await TipoProvento.findAll(query.removeTimestamp()))
}

module.exports.listTipoRecado = async (req, res) => {
    res.send(await TipoRecado.findAll(query.removeTimestamp()))
}

module.exports.listParcelasDecimoTerceiro = async (req, res) => {
    res.send(await ParcelasDecimoTerceiro.findAll(query.removeTimestamp()))
}
