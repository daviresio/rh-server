const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const ValorRecorrente = sequelize.define('ValorRecorrente', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        item: {
            type: DataTypes.STRING
        },
        valor: {
            type: DataTypes.DOUBLE
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'ValorRecorrente'
    })

    ValorRecorrente.associate = models => {
        ValorRecorrente.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'ValorRecorrenteId'})
    }

    return ValorRecorrente
}
