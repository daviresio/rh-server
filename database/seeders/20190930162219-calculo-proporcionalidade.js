'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CalculoProporcionalidade', [
      {
        nome: 'Conforme dia do mes',
        createdAt: new Date(),
      },
      {
        nome: 'Sempre 30 dias',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CalculoProporcionalidade', null, {});

  }
};
