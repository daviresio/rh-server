const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Holerite = sequelize.define('Holerite', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        data: {
            type: DataTypes.DATE,
            ...message.notNull('data')
        },
        descricao: DataTypes.STRING,
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Holerite'
    })
    Holerite.associate = models => {
        Holerite.belongsTo(models.MesHolerite, {as: 'mes', foreignKey: 'HoleriteId'})
        Holerite.belongsTo(models.TipoHolerite, {as: 'tipo', foreignKey: 'TipoHoleriteId'})
    }
    return Holerite
}
