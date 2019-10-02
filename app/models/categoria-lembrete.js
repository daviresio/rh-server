const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CategoriaLembrete = sequelize.define('CategoriaLembrete', {
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
        tableName: 'CategoriaLembrete'
    })

    CategoriaLembrete.associate = models => {
        CategoriaLembrete.hasMany(models.Lembrete, {as: 'lembretes', foreignKey: 'CategoriaLembreteId'})
    }
    
    return CategoriaLembrete
}
