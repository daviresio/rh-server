const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Cobranca = sequelize.define('Cobranca', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        razaoSocial: {
            type: DataTypes.STRING,
        },
        cnpj: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Cobranca'
    })
    Cobranca.associate = models => {
      //  Cobranca.hasOne(models.Empresa, {as: 'empresa', foreignKey: 'CobrancaId'})
    }
    return Cobranca
}
