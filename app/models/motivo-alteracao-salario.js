const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const MotivoAlteracaoSalario = sequelize.define('MotivoAlteracaoSalario', {
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
        tableName: 'MotivoAlteracaoSalario'
    })

    MotivoAlteracaoSalario.associate = models => {
        MotivoAlteracaoSalario.hasMany(models.Salario, {as: 'salario', foreignKey: 'MotivoAlteracaoSalarioId'})
    }
    
    return MotivoAlteracaoSalario
}

