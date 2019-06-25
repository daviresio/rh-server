'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Vinculo', [
      {
        nome: 'Aprendiz',
        createdAt: new Date(),
      },
      {
        nome: 'CLT',
        createdAt: new Date(),
      },
      {
        nome: 'Contrato intermitente',
        createdAt: new Date(),
      },
      {
        nome: 'Diretor estatuario',
        createdAt: new Date(),
      },
      {
        nome: 'Estagio',
        createdAt: new Date(),
      },
      {
        nome: 'Pessoa juridica',
        createdAt: new Date(),
      },
      {
        nome: 'Socio',
        createdAt: new Date(),
      },
      {
        nome: 'Trabalhador autonomo',
        createdAt: new Date(),
      },
      {
        nome: 'Trabalhador rural',
        createdAt: new Date(),
      },
      {
        nome: 'Trabalhador temporario',
        createdAt: new Date(),
      },
      {
        nome: 'Trabalhador voluntario',
        createdAt: new Date(),
      },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Vinculo', null, {});

  }
};
