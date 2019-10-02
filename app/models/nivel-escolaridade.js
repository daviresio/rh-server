const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const NivelEscolaridade = sequelize.define('NivelEscolaridade', {
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
        tableName: 'NivelEscolaridade'
    })

    NivelEscolaridade.associate = models => {
        NivelEscolaridade.hasMany(models.Escolaridade, {as: 'escolaridades', foreignKey: 'NivelEscolaridadeId'})
    }
    
    return NivelEscolaridade
}
