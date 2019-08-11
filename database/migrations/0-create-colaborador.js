'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Colaborador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      foto: {
        type: Sequelize.STRING,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },

      gestor: {
        type: Sequelize.INTEGER,
      },
      matricula: {
        type: Sequelize.STRING,
      },
      primeiroEmprego: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      pagouContribSindicalAnoAdmissao: {
        type: Sequelize.BOOLEAN,
      },
      dataExameAdmissional: {
        type: Sequelize.DATE,
      },
      dataAdmissao: {
        type: Sequelize.DATE,
      },
      salario: {
        type: Sequelize.DOUBLE
      },
      preenchimentoPeloColaborador: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      dataNascimento: {
        type: Sequelize.DATE,
      },
      nacionalidade: {
        type: Sequelize.STRING,
      },
      corRaca: {
        type: Sequelize.STRING,
      },
      naturalEstado: {
        type: Sequelize.STRING,
      },
      naturalCidade: {
        type: Sequelize.STRING,
      },
      sexo: {
        type: Sequelize.STRING,
      },
      estadoCivil: {
        type: Sequelize.STRING,
      },
      nomeMae: {
        type: Sequelize.STRING,
      },
      nomePai: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      celular: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      dataExpedicaoRg: {
        type: Sequelize.DATE,
      },
      orgaoEmissorRg: {
        type: Sequelize.STRING,
      },
      ufEmissorRg: {
        type: Sequelize.STRING,
      },
      cnh: {
        type: Sequelize.STRING,
      },
      categoriaCnh: {
        type: Sequelize.STRING,
      },
      dataExpedicaoCnh: {
        type: Sequelize.DATE,
      },
      dataValidadeCnh: {
        type: Sequelize.DATE,
      },
      carteiraTrabalho: {
        type: Sequelize.STRING,
      },
      nSerieCtps: {
        type: Sequelize.STRING,
      },
      dataEmissaoCtps: {
        type: Sequelize.DATE,
      },
      ufCtps: {
        type: Sequelize.STRING,
      },
      pis: {
        type: Sequelize.STRING,
      },
      tituloEleitor: {
        type: Sequelize.STRING,
      },
      zonaEleitoral: {
        type: Sequelize.STRING,
      },
      secaoEleitoral: {
        type: Sequelize.STRING,
      },
      estrangeiro: {
        type: Sequelize.BOOLEAN,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "PENDENTE"
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    return queryInterface.dropTable('Colaborador');
  }
};
