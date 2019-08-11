'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ConfiguracaoFolha', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            desoneracao: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,

            },
            calculoProporcionalidade: {
                type: Sequelize.STRING,
            },
            rat: {
                type: Sequelize.STRING,
            },
            fap: {
                type: Sequelize.STRING,
            },
            terceiros: {
                type: Sequelize.STRING,
            },
            empresa: {
                type: Sequelize.STRING,
            },
            incra: {
                type: Sequelize.STRING,
            },
            tipoCalculoHoraExtra: {
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
        return queryInterface.dropTable('ConfiguracaoFolha');
    }
};
