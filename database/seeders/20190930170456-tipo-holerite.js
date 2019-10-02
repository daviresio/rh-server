'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoHolerite', [
      {
        nome: 'Holerite',
        createdAt: new Date(),
      },
      {
        nome: 'Bonus',
        createdAt: new Date(),
      },
      {
        nome: 'Comissao',
        createdAt: new Date(),
      },
      {
        nome: 'Informe de rendimentos',
        createdAt: new Date(),
      },
      {
        nome: '13 salario',
        createdAt: new Date(),
      },
      {
        nome: 'Outros',
        createdAt: new Date(),
      },
      {
        nome: 'Recibo de ferias',
        createdAt: new Date(),
      },
      {
        nome: '13 salario primeira parcela',
        createdAt: new Date(),
      },
      {
        nome: '13 salario segunda parcela',
        createdAt: new Date(),
      },
      {
        nome: 'Adiantamento',
        createdAt: new Date(),
      },
      {
        nome: 'PLR',
        createdAt: new Date(),
      },
      {
        nome: 'Folha complementar',
        createdAt: new Date(),
      },
      {
        nome: 'Recibos',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoHolerite', null, {});

  }
};
