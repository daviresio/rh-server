'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoriaAnotacao', [
      {
        nome: 'Outros',
        createdAt: new Date(),
      },
      {
        nome: 'Treinamento',
        createdAt: new Date(),
      },
      {
        nome: 'Passado',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoriaAnotacao', null, {});

  }
};
