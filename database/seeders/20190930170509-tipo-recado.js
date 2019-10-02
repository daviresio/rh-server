'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoRecado', [
      {
        nome: 'Todos',
        createdAt: new Date(),
      },
      {
        nome: 'Importante',
        createdAt: new Date(),
      },
      {
        nome: 'Beneficios',
        createdAt: new Date(),
      },
      {
        nome: 'Politicas',
        createdAt: new Date(),
      },
      {
        nome: 'Movimentacoes',
        createdAt: new Date(),
      },
      {
        nome: 'Confraternizacao',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoRecado', null, {});

  }
};
