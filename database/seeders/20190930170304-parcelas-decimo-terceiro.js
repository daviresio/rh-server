'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ParcelasDecimoTerceiro', [
      {
        nome: 'Uma parcela',
        createdAt: new Date(),
      },
      {
        nome: 'Duas parcelas',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DecimoTerceiro', null, {});

  }
};
