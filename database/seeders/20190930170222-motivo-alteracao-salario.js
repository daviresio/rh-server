'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MotivoAlteracaoSalario', [
      {
        nome: 'Promocao',
        createdAt: new Date(),
      },
      {
        nome: 'Merito',
        createdAt: new Date(),
      },
      {
        nome: 'Alteracao de funcao',
        createdAt: new Date(),
      },
      {
        nome: 'Enquadramento salarial',
        createdAt: new Date(),
      },
      {
        nome: 'Ajuste de bolsa auxilio',
        createdAt: new Date(),
      },
      {
        nome: 'Reducao de jornada de trabalho',
        createdAt: new Date(),
      },
      {
        nome: 'Ajuste de pro labore',
        createdAt: new Date(),
      },
      {
        nome: 'Dissidio',
        createdAt: new Date(),
      },
      {
        nome: 'Acordo coletivo',
        createdAt: new Date(),
      },
      {
        nome: 'Expontaneo',
        createdAt: new Date(),
      },
      {
        nome: 'Admissao',
        createdAt: new Date(),
      },
      {
        nome: 'Enquadramento de funcao',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MotivoAlteracaoSalario', null, {});

  }
};
