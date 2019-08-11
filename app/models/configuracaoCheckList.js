const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const ConfiguracaoCheckList = sequelize.define('ConfiguracaoCheckList', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            ...message.notNull('ativo')
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'ConfiguracaoCheckList'
    })

    return ConfiguracaoCheckList
}
