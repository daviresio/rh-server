'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoriaLembrete', [
      {
        nome: 'Beneficios',
        createdAt: new Date(),
      },
      {
        nome: 'Folha de pagamento',
        createdAt: new Date(),
      },
      {
        nome: 'Comunicados',
        createdAt: new Date(),
      },
      {
        nome: 'Avaliacao',
        createdAt: new Date(),
      },
      {
        nome: 'Ferias e feriados',
        createdAt: new Date(),
      },
      {
        nome: 'Admissao',
        createdAt: new Date(),
      },
      {
        nome: 'Demissao',
        createdAt: new Date(),
      },
      {
        nome: 'Ponto',
        createdAt: new Date(),
      },
      {
        nome: 'Treinamento',
        createdAt: new Date(),
      },
      {
        nome: 'Documentos',
        createdAt: new Date(),
      },
      {
        nome: 'Exame',
        createdAt: new Date(),
      },
      {
        nome: 'Eventos',
        createdAt: new Date(),
      },
      {
        nome: 'Outros',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoriaLembrete', null, {});

  }
};
