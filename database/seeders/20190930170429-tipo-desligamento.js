'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoDesligamento', [
      {
        nome: 'Antecipado pelo empregado (tempo determinado)',
        createdAt: new Date(),
      },
      {
        nome: 'Antecipado pelo empregador (tempo indeterminado)',
        createdAt: new Date(),
      },
      {
        nome: 'Culpa reciproca',
        createdAt: new Date(),
      },
      {
        nome: 'Demissao COM justa causa fora do periodo de experiencia - Pedido da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Demissao fora do contrato de experiencia - Pedido do empregado',
        createdAt: new Date(),
      },
      {
        nome: 'Demissao SEM justa causa fora do contrato de experiencia - Pedido da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Extincao da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Extincao da empresa por forca maior',
        createdAt: new Date(),
      },
      {
        nome: 'Falecimento empregador individual por opcao do empregado',
        createdAt: new Date(),
      },
      {
        nome: 'Falecimento empregador individual s/cont. da atividade da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Morte',
        createdAt: new Date(),
      },
      {
        nome: 'Morte por acidente de trabalho',
        createdAt: new Date(),
      },
      {
        nome: 'Morte por acidente de trabalho de trajeto',
        createdAt: new Date(),
      },
      {
        nome: 'Morte por doenca profissional',
        createdAt: new Date(),
      },
      {
        nome: 'Outros',
        createdAt: new Date(),
      },
      {
        nome: 'Quebra de contrato de experiencia - Pedido da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Quebra de contrato de experiencia - Pedido do empregado',
        createdAt: new Date(),
      },
      {
        nome: 'Quebra do contrato de estagio por parte do empregado',
        createdAt: new Date(),
      },
      {
        nome: 'Quebra do contrato de estagio por parte da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Rescisao contratual por acordo entre as partes',
        createdAt: new Date(),
      },
      {
        nome: 'Termino do contrato de estagio',
        createdAt: new Date(),
      },
      {
        nome: 'Termino do contrato de experiencia - Pedido da empresa',
        createdAt: new Date(),
      },
      {
        nome: 'Termino do contrato de experiencia - Pedido do empregado',
        createdAt: new Date(),
      },
      {
        nome: 'Termino do contrato de trabalho por tempo indeterminado',
        createdAt: new Date(),
      },
      {
        nome: 'Termino do contrato por falecimento',
        createdAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoDesligamento', null, {});

  }
};
