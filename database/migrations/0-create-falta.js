'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Falta', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        dataInicial: {
          type: Sequelize.DATE
        },
        dataFinal: {
          type: Sequelize.DATE
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
  return queryInterface.dropTable('Falta');
  }
};
