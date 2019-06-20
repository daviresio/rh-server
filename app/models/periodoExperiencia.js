const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const PeriodoExperiencia = sequelize.define('PeriodoExperiencia', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        quantidadePeriodos: {
            allowNull: false,
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
        diasPrimeiroPeriodo: {
            allowNull: false,
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
        diasSegundoPeriodo: {
            allowNull: false,
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'PeriodoExperiencia'
    })

    return PeriodoExperiencia
}
