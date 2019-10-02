'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoCalculoHoraExtra', [
      {
        nome: 'Mes corrente',
        createdAt: new Date(),
      },
      {
        nome: 'Mes anterior',
        createdAt: new Date(),
      },
      {
        nome: 'Dia de corte',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoCalculoHoraExtra', null, {});

  }
};
