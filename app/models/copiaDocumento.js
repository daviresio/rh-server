const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CopiaDocumento = sequelize.define('CopiaDocumento', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        url: {
            type: DataTypes.STRING,
            ...message.notNull('url'),
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'CopiaDocumento'
    })

    CopiaDocumento.associate = models => {
        CopiaDocumento.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'CopiaDocumentoId'})
    }
    return CopiaDocumento
}
