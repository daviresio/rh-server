'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Feriado', [
            {
                nome: 'Confraternizacao Universal',
                data: new Date(2019, 0, 1, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Sexta-Feira da Paixao',
                data: new Date(2019, 3, 19, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Tiradentes',
                data: new Date(2019, 3, 21, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Dia do Trabalhador',
                data: new Date(2019, 4, 1, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Independencia',
                data: new Date(2019, 8, 7, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Nossa Senhora Aparecida',
                data: new Date(2019, 8, 12, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Finados',
                data: new Date(2019, 10, 2, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Proclamacao da Republica',
                data: new Date(2019, 10, 15, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Natal',
                data: new Date(2019, 11, 25, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            }, {
                nome: 'Revolucao Constitucionalista de 1932',
                data: new Date(2019, 6, 9, 0, 0, 0, 0),
                dsr: true,
                createdAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Feriado', null, {});

    }
};
