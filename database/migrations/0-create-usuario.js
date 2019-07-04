'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuario', { id: Sequelize.INTEGER });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuario');

  }
};
