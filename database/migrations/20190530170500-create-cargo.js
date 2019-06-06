'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cargo', {
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
      cbo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
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
    return queryInterface.dropTable('Cargo');
  }
};
