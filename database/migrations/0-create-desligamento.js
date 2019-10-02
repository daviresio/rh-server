'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Desligamento', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dataAviso: {
                type: Sequelize.DATE
            },
            dataDesligamento: {
                allowNull: false,
                type: Sequelize.DATE
            },
            exameDemissional: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            dataExameDemissional: {
                type: Sequelize.DATE
            },
            desvincularBeneficios: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            observacoes: {
                type: Sequelize.STRING,
            },
            idEmpresa: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: Sequelize.DATE,
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Desligamento');
    }
};
