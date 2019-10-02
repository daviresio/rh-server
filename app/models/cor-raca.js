const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CorRaca = sequelize.define('CorRaca', {
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
        tableName: 'CorRaca'
    })

    CorRaca.associate = models => {
        CorRaca.hasMany(models.Colaborador, {as: 'colaborador', foreignKey: 'CorRacaId'})
    }
    
    return CorRaca
}
