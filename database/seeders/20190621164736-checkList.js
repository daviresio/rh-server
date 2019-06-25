'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('CheckList', [
            {
                nome: 'Conferência dos documentos',
                concluido: false,
                createdAt: new Date(),
            },
            {
                nome: 'Assinatura da carteira de trabalho',
                concluido: false,
                createdAt: new Date(),
            },
            {
                nome: 'Exame admissional',
                concluido: false,
                createdAt: new Date(),
            },
            {
                nome: 'Criação da conta de e-mail',
                concluido: false,
                createdAt: new Date(),
            },
            {
                nome: 'Configuração do computador',
                concluido: false,
                createdAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CheckList', null, {});

    }
};
