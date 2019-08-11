const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const PeriodoExperiencia = sequelize.define('PeriodoExperiencia', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING,
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
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'PeriodoExperiencia',
    })
    PeriodoExperiencia.associate = models => {
        PeriodoExperiencia.hasMany(models.Colaborador, {as: 'colaboradores', foreignKey: 'PeriodoExperienciaId'})
    }
    return PeriodoExperiencia
}
