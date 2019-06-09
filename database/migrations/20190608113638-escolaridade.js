'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Escolaridade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      escolaridade: {
        type: Sequelize.STRING,
      },
      curso: {
        type: Sequelize.STRING,
      },
      instituicao: {
        type: Sequelize.STRING,
      },
      anoConclusao: {
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
   return queryInterface.dropTable('Escolaridade');

  }
};
