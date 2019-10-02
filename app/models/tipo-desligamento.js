const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoDesligamento = sequelize.define('TipoDesligamento', {
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
        tableName: 'TipoDesligamento'
    })

    TipoDesligamento.associate = models => {
        TipoDesligamento.hasMany(models.Desligamento, {as: 'desligamentos', foreignKey: 'TipoDesligamentoId'})
    }
    
    return TipoDesligamento
}
