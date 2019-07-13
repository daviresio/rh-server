const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const FechamentoFolha = sequelize.define('FechamentoFolha', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        dataReferencia: {
            type: DataTypes.DATE,
            ...message.notNull('dataReferencia')
        },
        dataInicio: {
            type: DataTypes.DATE,
            ...message.notNull('dataInicio')
        },
    }, {
        tableName: 'FechamentoFolha'
    })
    return FechamentoFolha
}
