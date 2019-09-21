'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('FechamentoFolhaItem', {   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    FechamentoEventoId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Evento',
        key: 'id'
      }
    },
    FechamentoColaboradorId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Colaborador',
        key: 'id'
      }
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
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
  return queryInterface.dropTable('FechamentoFolhaItem');

  }
};
