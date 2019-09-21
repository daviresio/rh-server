'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('FechamentoFolhaColaborador', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    FechamentoFolhaId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'FechamentoFolha',
        key: 'id'
      }
    },
    FechamentoFolhaColaboradorId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Colaborador',
        key: 'id'
      }
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
  return queryInterface.dropTable('FechamentoFolhaColaborador');

  }
};
