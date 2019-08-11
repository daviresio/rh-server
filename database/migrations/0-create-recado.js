'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recado', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      midia: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoria: {
        allowNull: false,
        type: Sequelize.STRING
      },
      notificarPorEmail: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      enviaParaTodosColaboradores: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      //TODO enviar para lista de departamentos e colaboradores
      arquivo: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Recado');

  }
};
