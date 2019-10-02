'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CalculoSaldoBeneficio', [
      {
        nome: 'Fixo mensal',
        createdAt: new Date(),
      },
      {
        nome: 'Dias uteis do mes seguinte',
        createdAt: new Date(),
      },
      {
        nome: 'Fixo',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CalculoSaldoBeneficio', null, {});

  }
};
