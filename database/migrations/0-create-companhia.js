'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Companhia', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
     },
     site: {
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
    return queryInterface.dropTable('Companhia');

  }
};
