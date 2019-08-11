const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Dependente = sequelize.define('Dependente', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        dataNascimento: {
            type: DataTypes.DATE,
            ...message.notNull('dataNascimento'),
        },
        estrangeiro: {
            type: DataTypes.BOOLEAN
        },
        cpf: {
            type: DataTypes.STRING,
            ...message.notNull('cpf'),
        },
        nomeMae: {
            type: DataTypes.STRING
        },
        relacao: {
            type: DataTypes.STRING,
            ...message.notNull('relacao'),
        },
        incluirParaFinsDeImpostoRenda: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            ...message.notNull('incluirParaFinsDeImpostoRenda'),
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Dependente'
    })

    Dependente.associate = models => {
        Dependente.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'DependenteId'})
    }
    return Dependente
}
