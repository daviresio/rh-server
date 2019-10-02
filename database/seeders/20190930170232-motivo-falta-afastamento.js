'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MotivoFaltaAfastamento', [
      {
        nome: 'Falta',
        createdAt: new Date(),
      },
      {
        nome: 'Afastamento por doenca',
        createdAt: new Date(),
      },
      {
        nome: 'Afastamento por acidente',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca maternidade',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca paternidade',
        createdAt: new Date(),
      },
      {
        nome: 'Outros',
        createdAt: new Date(),
      },
      {
        nome: 'Afastamento por suspensao',
        createdAt: new Date(),
      },
      {
        nome: 'Licenca casamento',
        createdAt: new Date(),
      },
      {
        nome: 'Falecimento familiar',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MotivoFaltaAfastamento', null, {});

  }
};
