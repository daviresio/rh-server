const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Configuracao = sequelize.define('Configuracao', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
    }, {
        tableName: 'Configuracao'
    })
    Configuracao.associate = models => {
        Configuracao.belongsTo(models.ConfiguracaoFolha, {as: 'folha', foreignKey: 'ConfiguracaoFolhaId'})
        Configuracao.belongsTo(models.ConfiguracaoDecimoTerceiro, {as: 'decimoTerceiro', foreignKey: 'ConfiguracaoDecimoTerceiroId'})
        Configuracao.hasMany(models.Feriado, {as: 'feriados', foreignKey: 'FeriadoId'})
    }
    return Configuracao
}
