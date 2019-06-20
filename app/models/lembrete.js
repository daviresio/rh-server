const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Lembrete = sequelize.define('Lembrete', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoria: {
            categoria: false,
            type: DataTypes.STRING,
            ...message.notNull('categoria')
        },
        titulo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('titulo')
        },
        descricao: {
            type: DataTypes.STRING
        },
        enviaParaTodosColaboradores: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
            ...message.notNull('enviaParaTodosColaboradores')
        },
        //TODO enviar para lista de departamentos e colaboradores
        lembreteRecorrente: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            ...message.notNull('lembreteRecorrente')
        },
        periodo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('periodo')
        },
        repeteACada: {
            type: DataTypes.STRING,
        },
        inicio: {
            allowNull: false,
            type: DataTypes.DATE,
            ...message.notNull('inicio')
        },
        termino: {
            allowNull: false,
            type: DataTypes.DATE,
            ...message.notNull('termino')
        },
        lembreteSemValidade: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            ...message.notNull('lembreteSemValidade')
        },
      /*  diasDaSemana: {
            type: DataTypes.ARRAY(Sequelize.STRING)
        }, */
    }, {
        tableName: 'Lembrete'
    })

    return Lembrete
}
