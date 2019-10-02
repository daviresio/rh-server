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
      curso: {
        type: Sequelize.STRING,
      },
      instituicao: {
        type: Sequelize.STRING,
      },
      anoConclusao: {
        type: Sequelize.STRING,
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
   return queryInterface.dropTable('Escolaridade');

  }
};
