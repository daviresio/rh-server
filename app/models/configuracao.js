const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Configuracao = sequelize.define('Configuracao', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Configuracao'
    })
    Configuracao.associate = models => {
        Configuracao.belongsTo(models.ConfiguracaoFolha, {as: 'folha', foreignKey: 'ConfiguracaoFolhaId'})
        Configuracao.belongsTo(models.ConfiguracaoDecimoTerceiro, {as: 'decimoTerceiro', foreignKey: 'ConfiguracaoDecimoTerceiroId'})
        Configuracao.belongsTo(models.Permissao, {as: 'permissao', foreignKey: 'PermissaoId'})
        Configuracao.hasMany(models.Feriado, {as: 'feriados', foreignKey: 'FeriadoId'})
        Configuracao.hasOne(models.Empresa, {as: 'empresa', foreignKey: 'ConfiguracaoId'})
    }

    return Configuracao
}
