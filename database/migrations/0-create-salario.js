'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Salario', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        dataInicial: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        dataFinal: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        salario: {
          type: Sequelize.DOUBLE,
        },
        motivo: {
          type: Sequelize.STRING,
        },
        justificativa: {
          type: Sequelize.STRING
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
  return queryInterface.dropTable('Salario');
  }
};
