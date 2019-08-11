const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Feriado = sequelize.define('Feriado', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        data: {
            type: DataTypes.DATE,
            ...message.notNull('data')
        },
        dsr: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Feriado'
    })

    return Feriado
}
