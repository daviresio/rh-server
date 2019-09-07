const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const ColaboradorBeneficio = sequelize.define('ColaboradorBeneficio', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        ColaboradorId: {
            type: DataTypes.INTEGER,
        },
        BeneficioId: {
            type: DataTypes.INTEGER,
        },
        custoEmpresa: {
            type: DataTypes.DOUBLE,
        },
        custoColaborador: {
            type: DataTypes.DOUBLE,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'ColaboradorBeneficio'
    })


    return ColaboradorBeneficio
}
