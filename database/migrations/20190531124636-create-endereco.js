'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Endereco',
       {
         id: {
           primaryKey: true,
           type: Sequelize.INTEGER,
           autoIncrement: true,
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
         }
       }
       );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Endereco');

  }
};
