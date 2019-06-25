const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const CheckList = sequelize.define('CheckList', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        concluido: {
            type: DataTypes.BOOLEAN,
            ...message.notNull('concluido')
        },
    }, {
        tableName: 'CheckList'
    })

   CheckList.associate = models => {
        CheckList.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'CheckListId'})
    }
    return CheckList
}
