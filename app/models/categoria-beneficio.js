const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CategoriaBeneficio = sequelize.define('CategoriaBeneficio', {
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
        tableName: 'CategoriaBeneficio'
    })

    CategoriaBeneficio.associate = models => {
        CategoriaBeneficio.hasMany(models.Beneficio, {as: 'beneficio', foreignKey: 'CategoriaBeneficioId'})
    }
    
    return CategoriaBeneficio
}
