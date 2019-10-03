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
        anotacao: {
            type: DataTypes.STRING,
            ...message.notNull('anotacao'),
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Anotacao'
    })

    Anotacao.associate = models => {
        Anotacao.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'AnotacaoId'})
        Anotacao.belongsTo(models.CategoriaAnotacao, {as: 'categoria', foreignKey: 'CategoriaAnotacaoId'})
    }
    return Anotacao
}
