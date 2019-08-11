const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const MesHolerite = sequelize.define('MesHolerite', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        data: {
            type: DataTypes.DATE,
            ...message.notNull('data')
        },
        tipo: {
            type: DataTypes.STRING,
        },
        descricao: DataTypes.STRING,
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'MesHolerite'
    })
    MesHolerite.associate = models => {
        MesHolerite.hasMany(models.Holerite, {as: 'holerites', foreignKey: 'HoleriteId'})
    }
    return MesHolerite
}
