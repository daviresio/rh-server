const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Holerite = sequelize.define('Holerite', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        data: {
            type: DataTypes.DATE,
            ...message.notNull('data')
        },
        tipo: {
            type: DataTypes.STRING,
        },
        descricao: DataTypes.STRING,
    }, {
        tableName: 'Holerite'
    })

    return Holerite
}
