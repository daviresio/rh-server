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
        tipo: {
            type: DataTypes.INTEGER
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
    };
    return ConfiguracaoSindicato
};
