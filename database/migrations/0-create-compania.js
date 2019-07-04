'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Companhia', { id: Sequelize.INTEGER });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companhia');

  }
};
