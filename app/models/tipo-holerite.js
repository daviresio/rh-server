const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoHolerite = sequelize.define('TipoHolerite', {
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
        tableName: 'TipoHolerite'
    })

    TipoHolerite.associate = models => {
        TipoHolerite.hasMany(models.Holerite, {as: 'holerites', foreignKey: 'TipoHoleriteId'})
    }
    
    return TipoHolerite
}
