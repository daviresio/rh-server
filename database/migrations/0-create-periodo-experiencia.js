'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PeriodoExperiencia', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            quantidadePeriodos: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.INTEGER,
            },
            diasPrimeiroPeriodo: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.INTEGER,
            },
            diasSegundoPeriodo: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('PeriodoExperiencia');
    }
};
