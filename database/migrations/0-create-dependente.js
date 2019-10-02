'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Dependente', {
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
            dataNascimento: {
                allowNull: false,
                type: Sequelize.DATE
            },
            estrangeiro: {
                type: Sequelize.BOOLEAN
            },
            cpf: {
                allowNull: false,
                type: Sequelize.STRING
            },
            nomeMae: {
                type: Sequelize.STRING
            },
            incluirParaFinsDeImpostoRenda: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            idEmpresa: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: Sequelize.DATE,
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Dependente');
    }
};
