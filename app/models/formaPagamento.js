const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const FormaPagamento = sequelize.define('FormaPagamento', {
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
        tableName: 'FormaPagamento'
    })

    FormaPagamento.associate = models => {
        FormaPagamento.hasMany(models.Colaborador, {as: 'colaboradores'})
    }
    return FormaPagamento
}
