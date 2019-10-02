'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Beneficio', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },
            operador: {
                allowNull: false,
                type: Sequelize.STRING
            },
            cnpjOperador: {
                type: Sequelize.STRING
            },
            descontaFaltaMesAnterior: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            descontaFeriasMesSeguinte: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            descontaAfastamentosMesAnterior: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            descontaLicencasMesSeguinte: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            descontaFeriasMesCorrente: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            custoDaEmpresaPagoPeloColaborador: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            dataDeCorte: {
                allowNull: false,
                type: Sequelize.STRING
            },
            dataVencimentoContrato: {
                type: Sequelize.DATE
            },
            descricao: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            idEmpresa: {
                type: Sequelize.INTEGER,
            },
            updatedAt: Sequelize.DATE,
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Beneficio');

    }
};
