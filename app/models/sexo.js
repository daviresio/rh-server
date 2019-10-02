const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Sexo = sequelize.define('Sexo', {
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
        tableName: 'Sexo'
    })

    Sexo.associate = models => {
        Sexo.hasMany(models.Colaborador, {as: 'colaborador', foreignKey: 'SexoId'})
    }
    
    return Sexo
}
