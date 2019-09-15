const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const FeriasContador = sequelize.define('FeriasContador', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        FeriasId: {
            type: DataTypes.INTEGER,
        },
        ContadorId: {
            type: DataTypes.INTEGER,
        },
        emailEnviado: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'FeriasContador'
    });


    return FeriasContador
};
