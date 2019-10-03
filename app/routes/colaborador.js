const {
    Colaborador, Cargo, Departamento, CentroDeCusto, Sindicato, Endereco, Escolaridade, JornadaTrabalho, Vinculo,
    FormaPagamento, PeriodoExperiencia, CheckList, Contato, Dependente, Banco, Beneficio, CopiaDocumento,
    ConfiguracaoCheckList, ColaboradorBeneficio, Falta, Ferias, Salario, Anotacao, ValorRecorrente, Desligamento,
    DesligamentoContador, Contador, FechamentoFolhaItem, FechamentoFolhaColaborador, FechamentoFolha,
    CorRaca, Sexo, EstadoCivil,
} = require('../models');

const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res) => {
    let params = {where: {idEmpresa: req.authData.empresa}};
    if (req.query.status) params = {where: {...params.where, ...req.query}};
    res.send(await Colaborador.findAll({...params, ...colaboradorParams}))
};

module.exports.findById = async (req, res) => {
    const result = await Colaborador.findByPk(req.params.id, {...colaboradorParams});
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res, next) => {
    try {
        const idEmpresa = req.authData.empresa;
        const {cargo: CargoId, departamento: DepartamentoId, centroDeCusto: CentroDeCustoId, sindicato: SindicatoId,
            jornadaTrabalho: JornadaTrabalhoId, vinculo: VinculoId, formaPagamento: FormaPagamentoId, periodoExperiencia: PeriodoExperienciaId,
            corRaca: CorRacaId, sexo: SexoId, estadoCivil: EstadoCivilId, checkList, ...data} = req.body;

        colaborador = await Colaborador.create({...data, CargoId, DepartamentoId, CentroDeCustoId, SindicatoId, JornadaTrabalhoId,
            VinculoId, FormaPagamentoId, PeriodoExperienciaId, CorRacaId, SexoId, EstadoCivilId, status: "ADMISSAO_PENDENTE", idEmpresa});

        await ConfiguracaoCheckList.findAll({where: {ativo: true}}).then(async result =>
            result.forEach(async v => await CheckList.create({nome: v.nome, concluido: false, CheckListId: colaborador.id, idEmpresa})));

        res.send(colaborador)
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {
    try {
        const {
            cargo, departamento, centroDeCusto, sindicato, checkList, jornadaTrabalho, vinculo, formaPagamento,
            endereco, escolaridade, banco, periodoExperiencia, contatos, dependentes, copiaDocumentos,
            corRaca, sexo, estadoCivil, ...colaborador
        } = req.body;

        const idEmpresa = req.authData.empresa;

        await Colaborador.update({...colaborador}, {
            where: {
                id: req.body.id
            },
        });

        let colaboradorSaved = await Colaborador.findByPk(req.body.id,
            {...colaboradorParams},
        );

        if (cargo && typeof cargo === 'number') await colaboradorSaved.setCargo(cargo);
        if (corRaca) await colaboradorSaved.setCorRaca(typeof corRaca === 'object' ? corRaca.id : corRaca);
        if (sexo) await colaboradorSaved.setSexo(typeof sexo === 'object' ? sexo.id : sexo);
        if (estadoCivil) await colaboradorSaved.setEstadoCivil(typeof estadoCivil === 'object' ? estadoCivil.id : estadoCivil);
        if (departamento) await colaboradorSaved.setDepartamento(typeof departamento === 'object' ? departamento.id : departamento);
        if (centroDeCusto) await colaboradorSaved.setCentroDeCusto(typeof centroDeCusto === 'object' ? centroDeCusto.id : centroDeCusto);
        if (jornadaTrabalho) await colaboradorSaved.setJornadaTrabalho(typeof jornadaTrabalho === 'object' ? jornadaTrabalho.id : jornadaTrabalho);
        if (vinculo) await colaboradorSaved.setVinculo(typeof vinculo === 'object' ? vinculo.id : vinculo);
        if (formaPagamento) await colaboradorSaved.setFormaPagamento(typeof formaPagamento === 'object' ? formaPagamento.id : formaPagamento);
        if (periodoExperiencia) await colaboradorSaved.setPeriodoExperiencia(typeof periodoExperiencia === 'object' ? periodoExperiencia.id : periodoExperiencia);

        if (endereco) {
            if (endereco.id) {
                await Endereco.update({...endereco}, {where: {id: endereco.id}});
                await colaboradorSaved.setEndereco(endereco.id)
            } else if (typeof endereco === 'number') {
                await colaboradorSaved.setEndereco(endereco)
            } else {
                const enderecoSaved = await Endereco.create(addIdEmpresa(endereco, idEmpresa));
                await enderecoSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (escolaridade) {
            if (escolaridade.id) {
                await Escolaridade.update({...escolaridade}, {where: {id: escolaridade.id}});
                await colaboradorSaved.setEscolaridade(escolaridade.id)
            } else if (typeof escolaridade === 'number') {
                await colaboradorSaved.setEscolaridade(escolaridade)
            } else {
                const escolaridadeSaved = await Escolaridade.create(addIdEmpresa(escolaridade, idEmpresa));
                await escolaridadeSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (banco) {
            if (banco.id) {
                await Banco.update({...banco}, {where: {id: banco.id}});
                await colaboradorSaved.setBanco(banco.id)
            } else if (typeof banco === 'number') {
                await colaboradorSaved.setBanco(banco)
            } else {
                const bancoSaved = await Banco.create(addIdEmpresa(banco, idEmpresa));
                await bancoSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (contatos && contatos.length) {
            await contatos.forEach(async c => {
                if (c.id) {
                    await Contato.update({...c}, {where: {id: c.id}});
                    await colaboradorSaved.addContato(c.id)
                } else if (typeof c === 'number') {
                    await colaboradorSaved.addContato(c)
                } else {
                    const contatoSaved = await Contato.create(addIdEmpresa(c, idEmpresa));
                    await contatoSaved.setColaborador(colaboradorSaved.id)
                }
            })

        }

        if (dependentes && dependentes.length) {
            await dependentes.forEach(async d => {
                if (d.id) {
                    await Dependente.update({...d}, {where: {id: d.id}});
                    await colaboradorSaved.addDependente(d.id)
                } else if (typeof d === 'number') {
                    await colaboradorSaved.addDependente(d)
                } else {
                    const dependenteSaved = await Dependente.create(addIdEmpresa(d, idEmpresa));
                    await dependenteSaved.setColaborador(colaboradorSaved.id)
                }
            })
        }

        if (copiaDocumentos && copiaDocumentos.length) {

            await CopiaDocumento.findAll({where: {CopiaDocumentoId: colaboradorSaved.id}}).then(v => {
                const finalArr = [];
                v.forEach(el => {
                    if (copiaDocumentos.findIndex(x => x.id === el.id) === -1) {
                        finalArr.push(el)
                    }
                });
                if (finalArr.length > 0) {
                    finalArr.forEach(async x => await CopiaDocumento.destroy({where: {id: x.id}}))
                }
            });

            await copiaDocumentos.forEach(async v => {
                if (!v.id) {
                    const copiaDocumentoSaved = await CopiaDocumento.create(addIdEmpresa(v, idEmpresa));
                    await copiaDocumentoSaved.setColaborador(colaboradorSaved.id)
                }
            })
        }

        colaboradorSaved = await Colaborador.findByPk(req.body.id, {...colaboradorParams});

        res.send(colaboradorSaved)
    } catch (e) {
        next(e)
    }
};

module.exports.delete = async (req, res) => {
    await Colaborador.destroy({where: {id: req.params.id}});
    res.status(200).send()
};

module.exports.qtdColaboradores = async (req, res) => {
    try {
        const idEmpresa = req.authData.empresa;
        const ativo = await Colaborador.findAll({where: {status: "ATIVO", idEmpresa}});
        const admissaoPendente = await Colaborador.findAll({where: {status: "ADMISSAO_PENDENTE", idEmpresa}});
        const desligamentoPendente = await Colaborador.findAll({where: {status: "DESLIGAMENTO_PENDENTE", idEmpresa}});
        const desligado = await Colaborador.findAll({where: {status: "DESLIGADO", idEmpresa}});
        res.send({ativo: ativo.length, admissaoPendente: admissaoPendente.length, desligamentoPendente: desligamentoPendente.length, desligado: desligado.length})
    } catch (e) {
        console.log(e);
        res.send(e)
    }
};


const colaboradorParams = {
    include: [
        {
            model: Banco,
            as: 'banco',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Cargo,
            as: 'cargo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: CorRaca,
            as: 'corRaca',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Sexo,
            as: 'sexo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: EstadoCivil,
            as: 'estadoCivil',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Departamento,
            as: 'departamento',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: CentroDeCusto,
            as: 'centroDeCusto',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Sindicato,
            as: 'sindicato',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Escolaridade,
            as: 'escolaridade',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Endereco,
            as: 'endereco',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: JornadaTrabalho,
            as: 'jornadaTrabalho',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Vinculo,
            as: 'vinculo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: FormaPagamento,
            as: 'formaPagamento',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: PeriodoExperiencia,
            as: 'periodoExperiencia',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Desligamento,
            as: 'desligamento',
            attributes: {exclude: ['createdAt', 'updatedAt', 'DesligamentoId']},
            include: [
                {
                    model: Contador,
                    as: 'contadores'
                }, {
                    model: CopiaDocumento,
                    as: 'copiaDocumentos',
                    attributes: {exclude: ['updatedAt', 'CopiaDocumentoDesligamentoId']}
                },
            ]
        }, {
            model: CheckList,
            as: 'checkList',
            attributes: {exclude: ['createdAt', 'updatedAt', 'CheckListId']}
        }, {
            model: Contato,
            as: 'contatos',
            attributes: {exclude: ['createdAt', 'updatedAt', 'ContatoId']}
        }, {
            model: Dependente,
            as: 'dependentes',
            attributes: {exclude: ['createdAt', 'updatedAt', 'DependenteId']}
        }, {
            model: Beneficio,
            as: 'beneficios',
            attributes: {exclude: ['createdAt', 'updatedAt', 'BeneficioId']}
        }, {
            model: CopiaDocumento,
            as: 'copiaDocumentos',
            attributes: {exclude: ['createdAt', 'updatedAt', 'CopiaDocumentoId']}
        }, {
            model: Falta,
            as: 'faltas',
            attributes: {exclude: ['createdAt', 'updatedAt', 'FaltaId']}
        }, {
            model: Ferias,
            as: 'ferias',
            attributes: {exclude: ['createdAt', 'updatedAt', 'FeriasId']}
        }, {
            model: Salario,
            as: 'salarios',
            attributes: {exclude: ['createdAt', 'updatedAt', 'SalarioId']}
        }, {
            model: Anotacao,
            as: 'anotacoes',
            attributes: {exclude: ['createdAt', 'updatedAt', 'AnotacaoId']}
        }, {
            model: ValorRecorrente,
            as: 'valoresRecorrentes',
            attributes: {exclude: ['createdAt', 'updatedAt', 'ValorRecorrenteId']}
        },
        {
            model: FechamentoFolhaItem,
            as: 'fechamentoFolhaItens',
            attributes: {exclude: ['createdAt', 'updatedAt']},
        },
        {
            model: FechamentoFolha,
            as: 'fechamentoFolhas',
            attributes: {exclude: ['createdAt', 'updatedAt']},
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt', 'CargoId', 'DepartamentoId', 'EnderecoId', 'CentroDeCustoId', 'SindicatoId', 'EscolaridadeId', 'JornadaTrabalhoId', 'VinculoId', 'FormaPagamentoId', 'PeriodoExperienciaId', 'BancoId']
    }
};
