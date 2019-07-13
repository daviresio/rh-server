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
            return queryInterface.addColumn('Beneficio', 'BeneficioId',
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
            return queryInterface.addColumn('Empresa', 'ConfiguracaoId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Configuracao',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        }).then(()=> {
            return queryInterface.addColumn('Configuracao', 'ConfiguracaoFolhaId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'ConfiguracaoFolha',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        }).then(()=> {
            return queryInterface.addColumn('Configuracao', 'ConfiguracaoDecimoTerceiroId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'ConfiguracaoFolha',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        }).then(()=> {
            return queryInterface.addColumn('Feriado', 'FeriadoId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Configuracao',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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
            .then(() => queryInterface.removeColumn('Beneficio', 'BeneficioId'))
            .then(() => queryInterface.removeColumn('Empresa', 'ConfiguracaoId'))
            .then(() => queryInterface.removeColumn('Configuracao', 'ConfiguracaoFolhaId'))
            .then(() => queryInterface.removeColumn('Configuracao', 'ConfiguracaoDecimoTerceiroId'))

    }
};
