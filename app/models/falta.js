const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Falta = sequelize.define('Falta', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        motivo: {
            type: DataTypes.STRING
        },
        tipo: {
            type: DataTypes.STRING
        },
        dataInicial: {
            type: DataTypes.DATE
        },
        dataFinal: {
            type: DataTypes.DATE
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Falta'
    })

    Falta.associate = models => {
        Falta.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'FaltaId'})
    }

    return Falta
}
