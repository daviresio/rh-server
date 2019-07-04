'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Empresa', { id: Sequelize.INTEGER });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Empresa');

  }
};
