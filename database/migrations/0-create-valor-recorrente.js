'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('ValorRecorrente', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        item: {
          type: Sequelize.STRING,
        },
        valor: {
          type: Sequelize.DOUBLE,
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
  return queryInterface.dropTable('ValorRecorrente');
  }
};
