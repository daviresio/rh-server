'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Banco', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            banco: {
                type: Sequelize.STRING,
            },
            agencia: {
                type: Sequelize.STRING,
            },
            conta: {
                type: Sequelize.STRING,
            },
            digito: {
                type: Sequelize.STRING,
            },
            comprovante: {
                type: Sequelize.STRING,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: Sequelize.DATE,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Banco');
    }
};
