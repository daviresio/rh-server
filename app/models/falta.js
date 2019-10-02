const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Falta = sequelize.define('Falta', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
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
        Falta.belongsTo(models.MotivoFaltaAfastamento, {as: 'motivo', foreignKey: 'MotivoFaltaAfastamentoId'})
        Falta.belongsTo(models.TipoFaltaAfastamento, {as: 'tipo', foreignKey: 'TipoFaltaAfastamentoId'})
    }

    return Falta
}
