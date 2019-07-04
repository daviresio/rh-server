'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contador', {
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
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      softwareContabil: {
        type: Sequelize.STRING
      },
      acessoAoSistemaDeContador: {
        type: Sequelize.BOOLEAN
      },
      responsavelPor: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: Sequelize.DATE,
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contador');
  }
};
