'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PeriodoExperiencia', [
            {
                nome: 'Nenhum',
                quantidadePeriodos: 0,
                diasPrimeiroPeriodo: 0,
                diasSegundoPeriodo: 0,
                createdAt: new Date(),
            },
            {
                nome: '1 x 15 dias',
                quantidadePeriodos: 1,
                diasPrimeiroPeriodo: 15,
                diasSegundoPeriodo: 0,
                createdAt: new Date(),
            },
            {
                nome: '1 x 30 dias',
                quantidadePeriodos: 1,
                diasPrimeiroPeriodo: 30,
                diasSegundoPeriodo: 0,
                createdAt: new Date(),
            },
            {
                nome: '1 x 45 dias',
                quantidadePeriodos: 1,
                diasPrimeiroPeriodo: 45,
                diasSegundoPeriodo: 0,
                createdAt: new Date(),
            },
            {
                nome: '1 x 60 dias',
                quantidadePeriodos: 1,
                diasPrimeiroPeriodo: 60,
                diasSegundoPeriodo: 0,
                createdAt: new Date(),
            },
            {
                nome: '1 x 90 dias',
                quantidadePeriodos: 1,
                diasPrimeiroPeriodo: 90,
                diasSegundoPeriodo: 0,
                createdAt: new Date(),
            },
            {
                nome: '2 x 15 dias',
                quantidadePeriodos: 2,
                diasPrimeiroPeriodo: 15,
                diasSegundoPeriodo: 15,
                createdAt: new Date(),
            },
            {
                nome: '2 x 30 dias',
                quantidadePeriodos: 2,
                diasPrimeiroPeriodo: 30,
                diasSegundoPeriodo: 30,
                createdAt: new Date(),
            },
            {
                nome: '2 x 45 dias',
                quantidadePeriodos: 2,
                diasPrimeiroPeriodo: 45,
                diasSegundoPeriodo: 45,
                createdAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PeriodoExperiencia', null, {});

    }
};
