'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Ferias', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        inicio: {
          allowNull: false,
          type: Sequelize.DATE
        },
        fim: {
          type: Sequelize.DATE
        },
        diasDeAbono: {
          type: Sequelize.INTEGER
        },
        anteciparParcelaDecimoTerceiro: {
          type: Sequelize.BOOLEAN
        },
        justificativa: {
          type: Sequelize.STRING
        },
        feriasColetivas: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN
        },
        status: {
          type: Sequelize.STRING,
        },
        comentarioParaContador: {
          type: Sequelize.STRING,
        },
        documentosAssinadosPeloRh: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
        aprovadoPeloGestorConcluido: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        aprovadoPeloRhConcluido: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        enviadoParaContabilidadeConcluido: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        calculosContabilidadeConcluido: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        conclusoesConcluido: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        idEmpresa: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: Sequelize.DATE,
      });
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Ferias');
  }
};
