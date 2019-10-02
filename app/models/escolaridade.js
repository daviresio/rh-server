const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Escolaridade = sequelize.define('Escolaridade', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        curso: {
            type: DataTypes.STRING,
        },
        instituicao: DataTypes.STRING,
        anoConclusao: DataTypes.STRING,
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Escolaridade'
    })
    Escolaridade.associate = models => {
        Escolaridade.hasOne(models.Colaborador, {as: 'colaborador', foreignKey: 'EscolaridadeId'})
        Escolaridade.belongsTo(models.NivelEscolaridade, {as: 'escolaridade', foreignKey: 'NivelEscolaridadeId'})
    }
    return Escolaridade
}
