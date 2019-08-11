const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Sindicato = sequelize.define('Sindicato', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        telefone: DataTypes.STRING,
        site: DataTypes.STRING,
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Sindicato'
    })
    Sindicato.associate = models => {
        Sindicato.hasMany(models.Colaborador, {as: 'colaboradores', foreignKey: 'SindicatoId'})
      //  Sindicato.belongsTo(models.Empresa, {as: 'empresa', foreignKey: 'SindicatoId'})
    }
    return Sindicato
}
