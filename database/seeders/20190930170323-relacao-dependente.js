'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RelacaoDependente', [
      {
        nome: 'Conjugue',
        createdAt: new Date(),
      },
      {
        nome: 'Companheiro com filhos e/ou uniao estavel',
        createdAt: new Date(),
      },
      {
        nome: 'Filho ou enteado ate 21 anos',
        createdAt: new Date(),
      },
      {
        nome: 'Filho ou enteado universitario ou em escola tecnica',
        createdAt: new Date(),
      },
      {
        nome: 'Irmao, neto ou bisneto com guarda',
        createdAt: new Date(),
      },
      {
        nome: 'Irmao, neto ou bisneto com guarda universitario ou em escola tecnica',
        createdAt: new Date(),
      },
      {
        nome: 'Pais, avos e bisavos',
        createdAt: new Date(),
      },
      {
        nome: 'Menor pobre, ate 21 anos',
        createdAt: new Date(),
      },
      {
        nome: 'Incapaz',
        createdAt: new Date(),
      },
      {
        nome: 'Companheiro sem filhos e/ou uniao estavel',
        createdAt: new Date(),
      },
      {
        nome: 'Agregado/outros',
        createdAt: new Date(),
      },
      {
        nome: 'Ex conjulgue que receba pensao',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RelacaoDependente', null, {});

  }
};
