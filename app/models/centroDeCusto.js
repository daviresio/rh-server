const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CentroDeCusto = sequelize.define('CentroDeCusto', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        }
    },{
        tableName: 'CentroDeCusto'
    })

    CentroDeCusto.associate = models => {
        CentroDeCusto.hasMany(models.Colaborador, {as: 'colaboradores'})
    }
    return CentroDeCusto
}
