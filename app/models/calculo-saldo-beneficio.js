const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CalculoSaldoBeneficio = sequelize.define('CalculoSaldoBeneficio', {
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
        tableName: 'CalculoSaldoBeneficio'
    })

    CalculoSaldoBeneficio.associate = models => {
        CalculoSaldoBeneficio.hasMany(models.Beneficio, {as: 'beneficio', foreignKey: 'CalculoSaldoBeneficioId'})
    }
    
    return CalculoSaldoBeneficio
}
