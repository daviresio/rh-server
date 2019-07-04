'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('FechamentoFolha', {   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    data: {
      allowNull: false,
      type: Sequelize.DATE
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: Sequelize.DATE,
  });
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('FechamentoFolha');

  }
};
