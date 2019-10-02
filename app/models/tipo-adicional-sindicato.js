const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoAdicionalSindicato = sequelize.define('TipoAdicionalSindicato', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        }
    }, {
        tableName: 'TipoAdicionalSindicato'
    })

    TipoAdicionalSindicato.associate = models => {
        TipoAdicionalSindicato.hasMany(models.ConfiguracaoSindicato, {as: 'configuracoes', foreignKey: 'TipoAdicionalSindicatoId'})
    }

    return TipoAdicionalSindicato
}
