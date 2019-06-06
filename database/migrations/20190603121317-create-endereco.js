'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('Endereco', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cep: {
      type: Sequelize.STRING,
    },
    endereco: {
      type: Sequelize.STRING,
    },
    numero: {
      type: Sequelize.STRING,
    },
    complemento: {
      type: Sequelize.STRING,
    },
    bairro: {
      type: Sequelize.STRING,
    },
    estado: {
      type: Sequelize.STRING,
    },
    cidade: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: Sequelize.DATE,
  });

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Endereco');
  }
};
