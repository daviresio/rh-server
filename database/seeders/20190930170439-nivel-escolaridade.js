'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NivelEscolaridade', [
      {
        nome: 'Analfabeto, inclusive o que, embora tenha recebido instrucao, nao se alfabetizou',
        createdAt: new Date(),
      },
      {
        nome: 'Ate o 5 ano incompleto do ensino fundamental (antiga 4 serie), ou que tenha se alfabetizado sem ter frequentado escola regular',
        createdAt: new Date(),
      },
      {
        nome: '5 ano completo do ensino fundamental',
        createdAt: new Date(),
      },
      {
        nome: 'Do 6 ao 9 ano do ensino fundamental incompleto (antiga 5 e 8 serie)',
        createdAt: new Date(),
      },
      {
        nome: 'Ensino fundamental completo',
        createdAt: new Date(),
      },
      {
        nome: 'Ensino medio incompleto',
        createdAt: new Date(),
      },
      {
        nome: 'Ensino medio completo',
        createdAt: new Date(),
      },
      {
        nome: 'Tecnico incompleto',
        createdAt: new Date(),
      },
      {
        nome: 'Tecnico completo',
        createdAt: new Date(),
      },
      {
        nome: 'Tegnologo incompleto',
        createdAt: new Date(),
      },
      {
        nome: 'Tegnologo completo',
        createdAt: new Date(),
      },
      {
        nome: 'Educacao superior incompleta',
        createdAt: new Date(),
      },
      {
        nome: 'Educacao superior completa',
        createdAt: new Date(),
      },
      {
        nome: 'Pos graduacao incompleta',
        createdAt: new Date(),
      },
      {
        nome: 'Pos graduacao completa',
        createdAt: new Date(),
      },
      {
        nome: 'Mestrado incompleto',
        createdAt: new Date(),
      },
      {
        nome: 'Mestrado completo',
        createdAt: new Date(),
      },
      {
        nome: 'Doutorado incompleto',
        createdAt: new Date(),
      },
      {
        nome: 'Doutorado completo',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('NivelEscolaridade', null, {});

  }
};
