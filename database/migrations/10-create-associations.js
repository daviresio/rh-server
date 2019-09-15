'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Colaborador', 'CargoId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Cargo',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }).then(() => {
            return queryInterface.addColumn('Colaborador', 'DepartamentoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Departamento',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'CentroDeCustoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'CentroDeCusto',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'SindicatoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Sindicato',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'EscolaridadeId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Escolaridade',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'EnderecoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Endereco',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'JornadaTrabalhoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'JornadaTrabalho',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('CheckList', 'CheckListId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'VinculoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Vinculo',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'FormaPagamentoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'FormaPagamento',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'PeriodoExperienciaId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'PeriodoExperiencia',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Contato', 'ContatoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Dependente', 'DependenteId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Colaborador', 'BancoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Banco',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('CopiaDocumento', 'CopiaDocumentoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('CopiaDocumento', 'CopiaDocumentoFeriasId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Ferias',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('CopiaDocumento', 'CopiaDocumentoDesligamentoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Desligamento',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Empresa', 'ConfiguracaoId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Configuracao',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(() => {
            return queryInterface.addColumn('Configuracao', 'ConfiguracaoFolhaId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'ConfiguracaoFolha',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        }).then(() => {
            return queryInterface.addColumn('Configuracao', 'ConfiguracaoDecimoTerceiroId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'ConfiguracaoFolha',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        }).then(() => {
            return queryInterface.addColumn('Configuracao', 'PermissaoId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Permissao',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(() => {
            return queryInterface.addColumn('Feriado', 'FeriadoId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Configuracao',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(() => {
            return queryInterface.addColumn('Holerite', 'HoleriteId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'MesHolerite',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(() => {
            return queryInterface.addColumn('Empresa', 'CobrancaId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Cobranca',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        })
        //FIXME colunas duplicadas, mas preciso delas
        /*.then(() => {
            return queryInterface.addColumn('Empresa', 'ConfiguracaoId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Cobranca',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        })*/.then(() => {
            return queryInterface.addColumn('Empresa', 'EmpresaId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Companhia',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(() => {
            return queryInterface.addColumn('Usuario', 'UsuarioId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Companhia',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(() => {
            return queryInterface.addColumn('Ferias', 'FeriasId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Salario', 'SalarioId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Anotacao', 'AnotacaoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Falta', 'FaltaId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('ValorRecorrente', 'ValorRecorrenteId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('ConfiguracaoSindicato', 'ConfiguracaoSindicatoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Sindicato',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Minuta', 'MinutaId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Empresa',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        }).then(() => {
            return queryInterface.addColumn('Desligamento', 'DesligamentoId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Colaborador',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Colaborador', 'CargoId')
            .then(() => queryInterface.removeColumn('Colaborador', 'DepartamentoId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'CentroDeCustoId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'SindicatoId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'EscolaridadeId'))
            .then(() => queryInterface.removeColumn('Endereco', 'EnderecoId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'JornadaTrabalhoId'))
            .then(() => queryInterface.removeColumn('CheckList', 'CheckListId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'VinculoId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'FormaPagamentoId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'PeriodoExperienciaId'))
            .then(() => queryInterface.removeColumn('Contato', 'ContatoId'))
            .then(() => queryInterface.removeColumn('Dependente', 'DependenteId'))
            .then(() => queryInterface.removeColumn('Colaborador', 'BancoId'))
            .then(() => queryInterface.removeColumn('CopiaDocumento', 'CopiaDocumentoId'))
            .then(() => queryInterface.removeColumn('CopiaDocumento', 'CopiaDocumentoFeriasId'))
            .then(() => queryInterface.removeColumn('Empresa', 'ConfiguracaoId'))
            .then(() => queryInterface.removeColumn('Configuracao', 'ConfiguracaoFolhaId'))
            .then(() => queryInterface.removeColumn('Configuracao', 'ConfiguracaoDecimoTerceiroId'))
            .then(() => queryInterface.removeColumn('Configuracao', 'PermissaoId'))
            .then(() => queryInterface.removeColumn('Feriado', 'FeriadoId'))
            .then(() => queryInterface.removeColumn('Holerite', 'HoleriteId'))
            .then(() => queryInterface.removeColumn('Empresa', 'CobrancaId'))
            .then(() => queryInterface.removeColumn('Usuario', 'UsuarioId'))
            .then(() => queryInterface.removeColumn('Ferias', 'FeriasId'))
            .then(() => queryInterface.removeColumn('Salario', 'SalarioId'))
            .then(() => queryInterface.removeColumn('Anotacao', 'AnotacaoId'))
            .then(() => queryInterface.removeColumn('Falta', 'FaltaId'))
            .then(() => queryInterface.removeColumn('ValorRecorrente', 'ValorRecorrenteId'))
            .then(() => queryInterface.removeColumn('ConfiguracaoSindicato', 'ConfiguracaoSindicatoId'))
            .then(() => queryInterface.removeColumn('Minuta', 'MinutaId'))
            .then(() => queryInterface.removeColumn('Desligamento', 'DesligamentoId'))
    }
};
