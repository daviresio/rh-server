'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('DesligamentoContador', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            DesligamentoId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Desligamento',
                    key: 'id'
                }
            },
            ContadorId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Contador',
                    key: 'id'
                }
            },
            emailEnviado: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
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
        return queryInterface.dropTable('DesligamentoContador');

    }
};
