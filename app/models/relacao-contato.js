const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const RelacaoContato = sequelize.define('RelacaoContato', {
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
        tableName: 'RelacaoContato'
    })

    RelacaoContato.associate = models => {
        RelacaoContato.hasMany(models.Contato, {as: 'contatos', foreignKey: 'RelacaoContatoId'})
    }
    
    return RelacaoContato
}
