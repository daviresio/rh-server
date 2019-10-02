'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PeriodoRecorrenciaLembrete', [
      {
        nome: 'Diariamente',
        createdAt: new Date(),
      },
      {
        nome: 'Semanalmente',
        createdAt: new Date(),
      },
      {
        nome: 'Mensalmente',
        createdAt: new Date(),
      },
      {
        nome: 'Anualmente',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PeriodoRecorrenciaLembrete', null, {});

  }
};
