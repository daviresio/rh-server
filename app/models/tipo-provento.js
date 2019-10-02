const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoProvento = sequelize.define('TipoProvento', {
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
        tableName: 'TipoProvento'
    })

    TipoProvento.associate = models => {
        TipoProvento.hasMany(models.Evento, {as: 'eventos', foreignKey: 'TipoProventoId'})
    }
    
    return TipoProvento
}
