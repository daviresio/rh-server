'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoProvento', [
      {
        nome: 'Provento',
        createdAt: new Date(),
      },
      {
        nome: 'Desconto',
        createdAt: new Date(),
      },
      {
        nome: 'Informativo',
        createdAt: new Date(),
      },
      {
        nome: 'Exclusivo para a empresa',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoProvento', null, {});

  }
};
