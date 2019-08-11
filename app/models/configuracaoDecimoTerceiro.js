const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const ConfiguracaoDecimoTerceiro = sequelize.define('ConfiguracaoDecimoTerceiro', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        parcelaUnica: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        mesPrimeiraParcela: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'ConfiguracaoDecimoTerceiro'
    })
    ConfiguracaoDecimoTerceiro.associate = models => {
        ConfiguracaoDecimoTerceiro.hasOne(models.Configuracao, {as: 'configuracao', foreignKey: 'ConfiguracaoDecimoTerceiroId'})
    }
    return ConfiguracaoDecimoTerceiro
}
