const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const MotivoFaltaAfastamento = sequelize.define('MotivoFaltaAfastamento', {
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
        tableName: 'MotivoFaltaAfastamento'
    })

    MotivoFaltaAfastamento.associate = models => {
        MotivoFaltaAfastamento.hasMany(models.Falta, {as: 'falta', foreignKey: 'MotivoFaltaAfastamentoId'})
    }
    
    return MotivoFaltaAfastamento
}
