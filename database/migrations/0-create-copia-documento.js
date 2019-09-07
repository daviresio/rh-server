'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('CopiaDocumento', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING
    },
    url: {
      allowNull: false,
      type: Sequelize.STRING
    },
    necessitaAssinatura: {
      type: Sequelize.BOOLEAN,
    },
    assinado: {
      type: Sequelize.BOOLEAN,
    },
    idEmpresa: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: Sequelize.DATE,
  });

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('CopiaDocumento');

  }
};
