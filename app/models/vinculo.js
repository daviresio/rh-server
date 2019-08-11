const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Vinculo = sequelize.define('Vinculo', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Vinculo'
    })

    Vinculo.associate = models => {
        Vinculo.hasMany(models.Colaborador, {as: 'colaboradores'})
    }
    return Vinculo
}
