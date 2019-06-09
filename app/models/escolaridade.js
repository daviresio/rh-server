const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Escolaridade = sequelize.define('Escolaridade', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        escolaridade: {
            type: DataTypes.STRING,
        },
        curso: {
            type: DataTypes.STRING,
        },
        instituicao: DataTypes.STRING,
        anoConclusao: DataTypes.STRING,
    }, {
        tableName: 'Endereco'
    })

    return Escolaridade
}