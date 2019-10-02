const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const RelacaoDependente = sequelize.define('RelacaoDependente', {
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
        tableName: 'RelacaoDependente'
    })

    RelacaoDependente.associate = models => {
        RelacaoDependente.hasMany(models.Dependente, {as: 'dependentes', foreignKey: 'RelacaoDependenteId'})
    }
    
    return RelacaoDependente
}
