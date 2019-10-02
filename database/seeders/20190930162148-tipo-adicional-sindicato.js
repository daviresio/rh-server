'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoAdicionalSindicato', [
      {
        nome: 'Hora extra',
        createdAt: new Date(),
      },
      {
        nome: 'Adicional',
        createdAt: new Date(),
      },
      {
        nome: 'Hora extra com adicional noturno',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoAdicionalSindicato', null, {});

  }
};
