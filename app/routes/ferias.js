const {Ferias, Colaborador, Empresa, Contador, FeriasContador, CopiaDocumento} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;
const fila = require('../../config/mqService');

module.exports.list = async (req, res) => {
    let params = {where: {idEmpresa: req.authData.empresa}};
    if (req.query.status) params = {where: {...params.where, ...req.query}};
    res.send(await Ferias.findAll({...getParams, ...params}))
};

module.exports.findById = async (req, res, next) => {
    try {
        const result = await Ferias.findByPk(req.params.id, {...getParams});
        res.status(200).send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador, ...data} = req.body;
        const result = await Ferias.create(addIdEmpresa(data, req.authData.empresa));
        await result.setColaborador(colaborador);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {

    try {
        const {copiaDocumentos, ...data} = req.body;

        await Ferias.update({...data}, {
            where: {
                id: req.body.id
            }
        });

        if (copiaDocumentos && copiaDocumentos.length) {
            copiaDocumentos.forEach(async c => {
                await CopiaDocumento.update({...c}, {where: {id: c.id}})
            })
        }

        const result = await Ferias.findByPk(req.body.id, {...getParams});
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.enviarParaContabilidade = async (req, res, next) => {
    try {
        const {contadores, ...data} = req.body;
        await Ferias.update({...data, enviadoParaContabilidadeConcluido: 'APROVADA'}, {
            where: {
                id: req.body.id
            }
        });

        const empresa = await Empresa.findByPk(req.authData.empresa);
        const result = await Ferias.findByPk(req.body.id, {...getParams});
        const {colaborador, ...ferias} = result.get({plain: true});

        const previousContadores = await Ferias.findAll({
            where: {
                FeriasId: req.body.id
            }
        });

        if (previousContadores.length) {
            await FeriasContador.destroy({where: {FeriasId: req.body.id}})
        }


        if (contadores && contadores.length) {
            contadores.forEach(async contador => {

                await FeriasContador.create({
                    FeriasId: data.id,
                    ContadorId: contador,
                    emailEnviado: true,
                });


                const contad = await Contador.findByPk(contador);

                fila.send(fila.queue.MAIL_QUEUE, contad.email, fila.type.MAIL_CONTADOR_SOLICITAR_FERIAS, {
                    ferias,
                    colaborador,
                    contador: contad.get({plain: true}),
                    empresa: empresa.get({plain: true})
                })

            })
        }
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.delete = async (req, res) => {
    await Ferias.destroy({where: {id: req.params.id}});
    res.status(200).send()
};


const getParams = {
    include: [
        {
            model: Colaborador,
            as: 'colaborador',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Contador,
            as: 'contadores',
            attributes: {exclude: ['createdAt', 'updatedAt', 'FeriasContadorId', 'ferias']}
        }, {
            model: CopiaDocumento,
            as: 'copiaDocumentos',
            attributes: {exclude: ['updatedAt', 'CopiaDocumentoFeriasId']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};

