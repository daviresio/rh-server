'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ConfiguracaoDecimoTerceiro', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            parcelaUnica: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            mesPrimeiraParcela: {
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
        return queryInterface.dropTable('ConfiguracaoDecimoTerceiro');
    }
};
