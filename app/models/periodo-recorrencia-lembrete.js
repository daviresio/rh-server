const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const PeriodoRecorrenciaLembrete = sequelize.define('PeriodoRecorrenciaLembrete', {
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
        tableName: 'PeriodoRecorrenciaLembrete'
    })

    PeriodoRecorrenciaLembrete.associate = models => {
        PeriodoRecorrenciaLembrete.hasMany(models.Lembrete, {as: 'lembretes', foreignKey: 'PeriodoRecorrenciaLembreteId'})
    }
    
    return PeriodoRecorrenciaLembrete
}
