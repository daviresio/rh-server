const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Endereco = sequelize.define('Endereco', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        cep: {
            type: DataTypes.STRING,
        },
        endereco: {
            type: DataTypes.STRING,
        },
        numero: {
            type: DataTypes.STRING,
        },
        complemento: {
            type: DataTypes.STRING,
        },
        bairro: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        cidade: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'Endereco'
    })

    Endereco.associate = models => {
        Endereco.hasOne(models.Colaborador, {as: 'colaborador', foreignKey: 'EnderecoId'})
    }
    return Endereco
}
