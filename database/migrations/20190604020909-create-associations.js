'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Colaborador', 'CargoId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Cargo',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }).then(() => {
      return queryInterface.addColumn('Colaborador', 'DepartamentoId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Departamento',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }).then(() => {
        return queryInterface.addColumn('Colaborador', 'CentroDeCustoId',
            {
              type: Sequelize.INTEGER,
              references: {
                model: 'CentroDeCusto',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL'
            }).then(() => {
          return queryInterface.addColumn('Colaborador', 'SindicatoId',
              {
                type: Sequelize.INTEGER,
                references: {
                  model: 'Sindicato',
                  key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
              })
        }).then(() => {
          return queryInterface.addColumn('Colaborador', 'EnderecoId',
              {
                type: Sequelize.INTEGER,
                references: {
                  model: 'Endereco',
                  key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
              })
        })
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Colaborador, CargoId')
        .then(()=> queryInterface.removeColumn('Colaborador, DepartamentoId'))
        .then(()=> queryInterface.removeColumn('Colaborador, CentroDeCustoId'))
        .then(()=> queryInterface.removeColumn('Colaborador, SindicatoId'))
        .then(()=> queryInterface.removeColumn('Colaborador, EnderecoId'))

  }
};
