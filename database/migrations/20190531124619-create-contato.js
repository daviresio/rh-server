'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Contato', {
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
        email: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        celular: {
          type: Sequelize.STRING
        },
        telefoneTrabalho: {
          type: Sequelize.STRING
        },
        relacao: {
          allowNull: false,
          type: Sequelize.STRING
        },
      });
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Contato');
  }
};
