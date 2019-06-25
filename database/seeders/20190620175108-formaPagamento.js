'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('FormaPagamento', [
     {
       nome: 'Bolsa',
       createdAt: new Date(),
     },
     {
       nome: 'Pro-labore',
       createdAt: new Date(),
     },
     {
       nome: 'Salario',
       createdAt: new Date(),
     },
   ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('FormaPagamento', null, {});

  }
};
