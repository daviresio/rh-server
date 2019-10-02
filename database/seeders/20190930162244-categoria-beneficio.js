'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoriaBeneficio', [
      {
        nome: 'Assistencia a educacao',
        createdAt: new Date(),
      },
      {
        nome: 'Clube de beneficios',
        createdAt: new Date(),
      },
      {
        nome: 'Convenio farmacia',
        createdAt: new Date(),
      },
      {
        nome: 'Estacionamento',
        createdAt: new Date(),
      },
      {
        nome: 'Outros',
        createdAt: new Date(),
      },
      {
        nome: 'Plano de saude',
        createdAt: new Date(),
      },
      {
        nome: 'Plano odontologico',
        createdAt: new Date(),
      },
      {
        nome: 'Previdencia',
        createdAt: new Date(),
      },
      {
        nome: 'Seguro de vida',
        createdAt: new Date(),
      },
      {
        nome: 'Vale alimentacao',
        createdAt: new Date(),
      },
      {
        nome: 'Vale combustivel',
        createdAt: new Date(),
      },
      {
        nome: 'Vale refeicao',
        createdAt: new Date(),
      },
      {
        nome: 'Vale transporte',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoriaBeneficio', null, {});

  }
};
