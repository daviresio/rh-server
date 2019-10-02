'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RelacaoContato', [
      {
        nome: 'Parente',
        createdAt: new Date(),
      },
      {
        nome: 'Amigo',
        createdAt: new Date(),
      },
      {
        nome: 'Pai',
        createdAt: new Date(),
      },
      {
        nome: 'Mae',
        createdAt: new Date(),
      },
      {
        nome: 'Irmao',
        createdAt: new Date(),
      },
      {
        nome: 'Conjugue',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RelacaoContato', null, {});

  }
};
