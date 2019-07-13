const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const ConfiguracaoFolha = sequelize.define('ConfiguracaoFolha', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        desoneracao: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,

        },
        calculoProporcionalidade: {
            type: DataTypes.STRING,
        },
        rat: {
            type: DataTypes.STRING,
        },
        fap: {
            type: DataTypes.STRING,
        },
        terceiros: {
            type: DataTypes.STRING,
        },
        empresa: {
            type: DataTypes.STRING,
        },
        incra: {
            type: DataTypes.STRING,
        },
        tipoCalculoHoraExtra: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'ConfiguracaoFolha'
    })
    ConfiguracaoFolha.associate = models => {
        ConfiguracaoFolha.hasOne(models.Configuracao, {as: 'configuracao', foreignKey: 'ConfiguracaoFolhaId'})
    }
    return ConfiguracaoFolha
}
