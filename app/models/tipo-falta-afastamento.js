const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoFaltaAfastamento = sequelize.define('TipoFaltaAfastamento', {
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
        tableName: 'TipoFaltaAfastamento'
    })

    TipoFaltaAfastamento.associate = models => {
        TipoFaltaAfastamento.hasMany(models.Falta, {as: 'faltas', foreignKey: 'TipoFaltaAfastamentoId'})
    }
    
    return TipoFaltaAfastamento
}
