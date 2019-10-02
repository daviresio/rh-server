'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('Lembrete', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    titulo: {
      allowNull: false,
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING
    },
    enviaParaTodosColaboradores: {
      allowNull: false,
      defaultValue: true,
      type: Sequelize.BOOLEAN
    },
    lembreteRecorrente: {
      allowNull: false,
      defaultValue: false,
      type: Sequelize.BOOLEAN
    },
    repeteACada: {
      type: Sequelize.STRING
    },
    inicio: {
      allowNull: false,
      type: Sequelize.DATE
    },
    termino: {
      allowNull: false,
      type: Sequelize.DATE
    },
    lembreteSemValidade: {
      allowNull: false,
      defaultValue: false,
      type: Sequelize.BOOLEAN
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
   return queryInterface.dropTable('Lembrete');

  }
};
