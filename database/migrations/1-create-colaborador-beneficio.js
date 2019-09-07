'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ColaboradorBeneficio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ColaboradorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Colaborador',
          key: 'id'
        }
      },
      BeneficioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Beneficio',
          key: 'id'
        }
      },
      custoEmpresa: {
        type: Sequelize.DOUBLE,
      },
      custoColaborador: {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('ColaboradorBeneficio');

  }
};
