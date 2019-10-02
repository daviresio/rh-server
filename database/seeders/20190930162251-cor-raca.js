'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CorRaca', [
      {
        nome: 'Indigena',
        createdAt: new Date(),
      },
      {
        nome: 'Branca',
        createdAt: new Date(),
      },
      {
        nome: 'Preta/Negra',
        createdAt: new Date(),
      },
      {
        nome: 'Amarela',
        createdAt: new Date(),
      },
      {
        nome: 'Parda',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CorRaca', null, {});

  }
};
