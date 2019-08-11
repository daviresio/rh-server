const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Cargo = sequelize.define('Cargo', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        cbo: {
            type: DataTypes.STRING,
            ...message.notNull('cbo')
        },
        descricao: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Cargo'
    })

    Cargo.associate = models => {
        Cargo.hasMany(models.Colaborador, {as: 'colaboradores'})
    }
    return Cargo
}
