const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Departamento = sequelize.define('Departamento', {
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
        tableName: 'Departamento'
    })

    Departamento.associate = models => {
        Departamento.hasMany(models.Colaborador, {as: 'colaboradores'})
    }
    return Departamento
}
