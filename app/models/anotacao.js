const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Anotacao = sequelize.define('Anotacao', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            ...message.notNull('titulo'),
        },
        categoria: {
            type: DataTypes.STRING,
            ...message.notNull('categoria'),
        },
        anotacao: {
            type: DataTypes.STRING,
            ...message.notNull('anotacao'),
        },

    },{
        tableName: 'Anotacao'
    })

    Anotacao.associate = models => {
        Anotacao.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'AnotacaoId'})
    }
    return Anotacao
}
