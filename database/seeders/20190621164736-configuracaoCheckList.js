'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ConfiguracaoCheckList', [
            {
                nome: 'Conferência dos documentos',
                ativo: true,
                createdAt: new Date(),
            },
            {
                nome: 'Assinatura da carteira de trabalho',
                ativo: true,
                createdAt: new Date(),
            },
            {
                nome: 'Exame admissional',
                ativo: true,
                createdAt: new Date(),
            },
            {
                nome: 'Criação da conta de e-mail',
                ativo: true,
                createdAt: new Date(),
            },
            {
                nome: 'Configuração do computador',
                ativo: true,
                createdAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ConfiguracaoCheckList', null, {});

    }
};
