const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoAvisoPrevio = sequelize.define('TipoAvisoPrevio', {
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
        tableName: 'TipoAvisoPrevio'
    })

    TipoAvisoPrevio.associate = models => {
        TipoAvisoPrevio.hasMany(models.Desligamento, {as: 'desligamentos', foreignKey: 'TipoAvisoPrevioId'})
    }
    
    return TipoAvisoPrevio
}
