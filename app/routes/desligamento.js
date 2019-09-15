const {Desligamento, Colaborador, Contador, DesligamentoContador, CopiaDocumento, Empresa, Departamento, Cargo, Ferias, Beneficio} = require('../models');
const addIdEmpresa = require('../util/util').addIdEmpresa;
const fila = require('../../config/mqService');

module.exports.list = async (req, res) => {
    let params = {where: {idEmpresa: req.authData.empresa}};
    if (req.query.status) params = {where: {...params.where, ...req.query}};
    res.send(await Desligamento.findAll({...getParams, ...params}))
};

module.exports.findById = async (req, res, next) => {
    try {
        const result = await Desligamento.findByPk(req.params.id, {...getParams});
        res.status(200).send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador, contadores, ...data} = req.body;

        const result = await Desligamento.create(addIdEmpresa(
            {...data, DesligamentoId: colaborador}, req.authData.empresa));

        if (contadores && contadores.length) {
            contadores.forEach(async c => {
                await DesligamentoContador.create({
                    DesligamentoId: result.id,
                    ContadorId: c,
                    emailEnviado: true,
                });


                const contad = await Contador.findByPk(c);

                const colaborad = await Colaborador.findByPk(colaborador);

                const empresa = await Empresa.findByPk(req.authData.empresa);

                fila.send(fila.queue.MAIL_QUEUE, contad.email, fila.type.MAIL_CONTADOR_DESLIGAR_FUNCIONARIO, {
                    colaborador: colaborad.get({plain: true}),
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

module.exports.update = async (req, res, next) => {

    try {
        const {colaborador, copiaDocumentos, contadores, ...data} = req.body;

        await Desligamento.update({...data}, {
            where: {
                id: req.body.id
            }
        });

        if (contadores && contadores.length) {
            contadores.forEach(async c => {
                await DesligamentoContador.destroy({where: {DesligamentoId: data.id}});

                await DesligamentoContador.create({
                    DesligamentoId: data.id,
                    ContadorId: c,
                    emailEnviado: true,
                });

                const contad = await Contador.findByPk(c);

                const colaborad = await Colaborador.findByPk(colaborador, {...paramsColaborador});

                const empresa = await Empresa.findByPk(req.authData.empresa);

                fila.send(fila.queue.MAIL_QUEUE, contad.email, fila.type.MAIL_CONTADOR_DESLIGAR_FUNCIONARIO, {
                    colaborador: colaborad.get({plain: true}),
                    contador: contad.get({plain: true}),
                    empresa: empresa.get({plain: true})
                })

            })
        }

        if (copiaDocumentos && copiaDocumentos.length) {
            copiaDocumentos.forEach(async c => {
                await CopiaDocumento.update({...c}, {where: {id: c.id}})
            })
        }

        const send = await Desligamento.findByPk(req.body.id, {...getParams});
        res.send(send)
    } catch (e) {
        next(e)
    }
};


module.exports.delete = async (req, res) => {
    await Desligamento.destroy({where: {id: req.params.id}});
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
            attributes: {exclude: ['createdAt', 'updatedAt', 'DesligamentoContadorId']}
        }, {
            model: CopiaDocumento,
            as: 'copiaDocumentos',
            attributes: {exclude: ['updatedAt', 'CopiaDocumentoDesligamentoId']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};


const paramsColaborador = {
    include: [
        {
            model: Desligamento,
            as: 'desligamento',
            attributes: {exclude: ['createdAt', 'updatedAt', 'DesligamentoId']},
        }, {
            model: Cargo,
            as: 'cargo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Departamento,
            as: 'departamento',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Ferias,
            as: 'ferias',
            attributes: {exclude: ['createdAt', 'updatedAt', 'FeriasId']}
        }, {
            model: Beneficio,
            as: 'beneficios',
            attributes: {exclude: ['createdAt', 'updatedAt', 'BeneficioId']}
        },
    ]
};
