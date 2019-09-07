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
        inicioPeriodoAquisitivo: {
          allowNull: false,
          type: Sequelize.DATE
        },
        finalPeriodoAquisitivo: {
          type: Sequelize.DATE
        },
        vencimento: {
          type: Sequelize.DATE
        },
        segundoVencimento: {
          type: Sequelize.DATE
        },
        diasDeAbono: {
          type: Sequelize.INTEGER
        },
        diasDeFerias: {
          type: Sequelize.INTEGER
        },
        totalDias: {
          type: Sequelize.INTEGER
        },
        anteciparParcelaDecimoTerceiro: {
          type: Sequelize.BOOLEAN
        },
        justificativa: {
          type: Sequelize.STRING
        },
        feriasColetivas: {
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
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
        aprovadoPeloGestorConcluido: {
          type: Sequelize.STRING,
        },
        aprovadoPeloRhConcluido: {
          type: Sequelize.STRING,
        },
        enviadoParaContabilidadeConcluido: {
          type: Sequelize.STRING,
        },
        calculosContabilidadeConcluido: {
          type: Sequelize.STRING,
        },
        conclusoesConcluido: {
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
