const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const ParcelasDecimoTerceiro = sequelize.define('ParcelasDecimoTerceiro', {
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
        tableName: 'ParcelasDecimoTerceiro'
    })
    
    return ParcelasDecimoTerceiro
}
