const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CategoriaAnotacao = sequelize.define('CategoriaAnotacao', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        }
    }, {
        tableName: 'CategoriaAnotacao'
    })

    CategoriaAnotacao.associate = models => {
        CategoriaAnotacao.hasMany(models.Anotacao, {as: 'anotacao', foreignKey: 'CategoriaAnotacaoId'})
    }

    return CategoriaAnotacao
}
