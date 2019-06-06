const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Sindicato = sequelize.define('Sindicato', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        telefone: DataTypes.STRING,
        site: DataTypes.STRING,
    }, {
        tableName: 'Sindicato'
    })
    Sindicato.associate = models => {
        Sindicato.hasMany(models.Colaborador, {as: 'colaboradores'})
    }
    return Sindicato
}
