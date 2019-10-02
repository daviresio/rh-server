const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoCalculoHoraExtra = sequelize.define('TipoCalculoHoraExtra', {
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
        tableName: 'TipoCalculoHoraExtra'
    })
    
    return TipoCalculoHoraExtra
}
