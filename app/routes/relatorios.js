const fila = require('../../config/mqService');

const extensaoExcel = 'xlsx'

const RELATORIO_ANIVERSARIOS = 'RELATORIO_ANIVERSARIOS'
const RELATORIO_DADOS_BANCARIOS = 'RELATORIO_DADOS_BANCARIOS'
const RELATORIO_CONTATOS = 'RELATORIO_CONTATOS'
const RELATORIO_DEPENDENTES = 'RELATORIO_DEPENDENTES'
const RELATORIO_COLABORADORES_POR_VINCULO = 'RELATORIO_COLABORADORES_POR_VINCULO'
const RELATORIO_GESTORES = 'RELATORIO_GESTORES'
const RELATORIO_TEMPO_DE_CASA = 'RELATORIO_TEMPO_DE_CASA'
const RELATORIO_ANOTACOES = 'RELATORIO_ANOTACOES'
const RELATORIO_ATUALIZACOES_CARGOS_E_SALARIOS = 'RELATORIO_ATUALIZACOES_CARGOS_E_SALARIOS'
const RELATORIO_ADMISSOES = 'RELATORIO_ADMISSOES'
const RELATORIO_DESLIGAMENTOS = 'RELATORIO_DESLIGAMENTOS'





module.exports.aniversario = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_ANIVERSARIOS})
        res = setHeaders(res,'aniversarios')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.dadosBancarios = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_DADOS_BANCARIOS})
        res = setHeaders(res,'dados_bancarios')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.contatos = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_CONTATOS})
        res = setHeaders(res,'contatos')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.dependentes = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_DEPENDENTES})
        res = setHeaders(res,'dependentes')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.colaboradoresPorVinculo = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_COLABORADORES_POR_VINCULO})
        res = setHeaders(res,'colaboradores_por_vinculo')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.gestores = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_GESTORES})
        res = setHeaders(res,'gestores')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.tempoDeCasa = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_TEMPO_DE_CASA})
        res = setHeaders(res,'tempo_de_casa')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.anotacoes = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_ANOTACOES})
        res = setHeaders(res,'anotacoes')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.atualizacaoCargosESalarios = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_ATUALIZACOES_CARGOS_E_SALARIOS})
        res = setHeaders(res,'atualizacoes_cargos_salarios')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.admissoes = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_ADMISSOES})
        res = setHeaders(res,'admissoes')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}


module.exports.desligamentos = async (req, res, next) => {
    try {
        const file = await fila.generateRelatory({data: {idEmpresa: req.authData.empresa}, relatorio: RELATORIO_DESLIGAMENTOS})
        res = setHeaders(res,'desligamentos')
        res.write(file)
        res.send()
    } catch (e) {
        next(e)
    }
}





const setHeaders = (res, filename) => {
    res.setHeader('Content-Disposition', `attachment; filename=${filename}.${extensaoExcel}`);
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')

    return res
}