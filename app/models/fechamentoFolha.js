const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const FechamentoFolha = sequelize.define('FechamentoFolha', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        dataReferencia: {
            type: DataTypes.DATE,
            ...message.notNull('dataReferencia')
        },
        dataInicio: {
            type: DataTypes.DATE,
            ...message.notNull('dataInicio')
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'FechamentoFolha'
    })

    FechamentoFolha.associate = models => {
        FechamentoFolha.hasMany(models.FechamentoFolhaItem, {as: 'itens', foreignKey: 'FechamentoId'});
        FechamentoFolha.belongsToMany(models.Colaborador, {through: 'FechamentoFolhaColaborador', as: 'colaboradores', foreignKey: 'FechamentoFolhaId', otherKey: 'FechamentoFolhaColaboradorId'});

    }

    return FechamentoFolha

}
