'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoAvisoPrevio', [
      {
        nome: 'Trabalhado',
        createdAt: new Date(),
      },
      {
        nome: 'Indenizado',
        createdAt: new Date(),
      },
      {
        nome: 'Nao aplicavel',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoAvisoPrevio', null, {});

  }
};
