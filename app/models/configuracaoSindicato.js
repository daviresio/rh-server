const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const ConfiguracaoSindicato = sequelize.define('ConfiguracaoSindicato', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING
        },
        adicional: {
            type: DataTypes.DOUBLE
        },
        horaExtra: {
            type: DataTypes.DOUBLE
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'ConfiguracaoSindicato'
    });
    ConfiguracaoSindicato.associate = models => {
        ConfiguracaoSindicato.belongsTo(models.Sindicato, {as: 'sindicato', foreignKey: 'ConfiguracaoSindicatoId'})
        ConfiguracaoSindicato.belongsTo(models.TipoAdicionalSindicato, {as: 'tipo', foreignKey: 'TipoAdicionalSindicatoId'})
    };
    return ConfiguracaoSindicato
};
