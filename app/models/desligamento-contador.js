const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const DesligamentoContador = sequelize.define('DesligamentoContador', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        DesligamentoId: {
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
        tableName: 'DesligamentoContador'
    });


    return DesligamentoContador
};
