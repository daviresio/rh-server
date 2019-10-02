const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CalculoProporcionalidade = sequelize.define('CalculoProporcionalidade', {
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
        tableName: 'CalculoProporcionalidade'
    })
    
    return CalculoProporcionalidade
}
