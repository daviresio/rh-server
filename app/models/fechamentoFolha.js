const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const FechamentoFolha = sequelize.define('FechamentoFolha', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        data: {
            type: DataTypes.DATE,
        },
    }, {
        tableName: 'FechamentoFolha'
    })
    return FechamentoFolha
}
