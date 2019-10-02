'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoFaltaAfastamento', [
      {
        nome: 'Justificada',
        createdAt: new Date(),
      },
      {
        nome: 'Nao justificada',
        createdAt: new Date(),
      },
      {
        nome: 'Atestado medico',
        createdAt: new Date(),
      },
      {
        nome: 'Superior a 15 dias',
        createdAt: new Date(),
      },
      {
        nome: 'Igual ou inferior a 15 dias',
        createdAt: new Date(),
      },
      {
        nome: 'Novo afastamento - Mesmo acidednte de trabalho',
        createdAt: new Date(),
      },
      {
        nome: 'Novo afastamento - Mesma doenca 60 dias',
        createdAt: new Date(),
      },
      {
        nome: 'Prorrogacao da licenca maternidade',
        createdAt: new Date(),
      },
      {
        nome: 'Aborto nao criminoso',
        createdAt: new Date(),
      },
      {
        nome: 'Adocao (ate 1 ano de idade)',
        createdAt: new Date(),
      },
      {
        nome: 'Adocao (de 1 ate 4 anos de idade)',
        createdAt: new Date(),
      },
      {
        nome: 'Adocao (a partir de 4 anos de idade)',
        createdAt: new Date(),
      },
      {
        nome: 'Servico militar',
        createdAt: new Date(),
      },
      {
        nome: 'Mandato judicial',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca sem vencimento',
        createdAt: new Date(),
      },
      {
        nome: 'Outros motivos de vencimento temporario',
        createdAt: new Date(),
      },
      {
        nome: '5 dias de licenca paternidade',
        createdAt: new Date(),
      },
      {
        nome: 'Nascimento natutal 180 dias',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca remunerada',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca nao remunerada',
        createdAt: new Date(),
      },
      {
        nome: 'Aposentadoria por invalidez',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca maternidade',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoFaltaAfastamento', null, {});

  }
};
