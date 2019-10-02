'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EstadoCivil', [
      {
        nome: 'Solteiro(a)',
        createdAt: new Date(),
      },
      {
        nome: 'Casado(a)',
        createdAt: new Date(),
      },
      {
        nome: 'Divorciado(a)',
        createdAt: new Date(),
      },
      {
        nome: 'Viuvo(a)',
        createdAt: new Date(),
      },
      {
        nome: 'Separado(a)',
        createdAt: new Date(),
      },
      {
        nome: 'Uniao estavel',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EstadoCivil', null, {});

  }
};
