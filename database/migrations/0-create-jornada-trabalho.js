'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('JornadaTrabalho', {
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
            entradaDomingo: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaDomingo: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloDomingo: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloDomingo: {
                allowNull: false,
                type: Sequelize.STRING
            },
            entradaSegunda: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaSegunda: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloSegunda: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloSegunda: {
                allowNull: false,
                type: Sequelize.STRING
            },
            entradaTerca: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaTerca: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloTerca: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloTerca: {
                allowNull: false,
                type: Sequelize.STRING
            },
            entradaQuarta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaQuarta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloQuarta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloQuarta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            entradaQuinta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaQuinta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloQuinta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloQuinta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            entradaSexta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaSexta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloSexta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloSexta: {
                allowNull: false,
                type: Sequelize.STRING
            },
            entradaSabado: {
                allowNull: false,
                type: Sequelize.STRING
            },
            saidaSabado: {
                allowNull: false,
                type: Sequelize.STRING
            },
            inicioIntervaloSabado: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fimIntervaloSabado: {
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable('JornadaTrabalho');

    }
};
