
module.exports = (sequelize, DataTypes) => {

    const FechamentoFolhaItem = sequelize.define('FechamentoFolhaItem', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        FechamentoEventoId: {
            type: DataTypes.INTEGER,
        },
        FechamentoColaboradorId: {
            type: DataTypes.INTEGER,
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'FechamentoFolhaItem'
    })

    FechamentoFolhaItem.associate = models => {
        FechamentoFolhaItem.belongsTo(models.FechamentoFolha, {as: 'fechamentoFolha', foreignKey: 'FechamentoId'})
        FechamentoFolhaItem.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'FechamentoColaboradorId'})
        FechamentoFolhaItem.belongsTo(models.Evento, {as: 'evento', foreignKey: 'FechamentoEventoId'})
    }
    return FechamentoFolhaItem
}
