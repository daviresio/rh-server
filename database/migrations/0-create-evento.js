'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Evento', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            codigo: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            eSocial: {
                type: Sequelize.STRING,
            },
            tipo: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            tributarIrrf: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            tributarInss: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            tributarFgts: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            considerarNoCalculoDsr: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            adicionarAoArquivoDeIntegracao: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            sobrescreverCalculoDoSistema: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            campoAtivo: {
                defaultValue: true,
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: Sequelize.DATE,
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Evento');
    }
};
