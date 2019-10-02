const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Lembrete = sequelize.define('Lembrete', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
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
        lembreteRecorrente: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            ...message.notNull('lembreteRecorrente')
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
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Lembrete'
    })

    Lembrete.associate = models => {
        Lembrete.belongsTo(models.CategoriaLembrete, {as: 'categoria', foreignKey: 'CategoriaLembreteId'});
        Lembrete.belongsTo(models.PeriodoRecorrenciaLembrete, {as: 'periodoRecorrencia', foreignKey: 'PeriodoRecorrenciaLembreteId'});
    }

    return Lembrete
}
