const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const EstadoCivil = sequelize.define('EstadoCivil', {
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
        tableName: 'EstadoCivil'
    })

    EstadoCivil.associate = models => {
        EstadoCivil.hasMany(models.Colaborador, {as: 'colaborador', foreignKey: 'EstadoCivilId'})
    }
    
    return EstadoCivil
}
