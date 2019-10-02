'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sexo', [
      {
        nome: 'Masculino',
        createdAt: new Date(),
      },
      {
        nome: 'Femenino',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sexo', null, {});

  }
};
