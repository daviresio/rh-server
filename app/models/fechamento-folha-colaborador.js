
module.exports = (sequelize, DataTypes) => {

    const FechamentoFolhaColaborador = sequelize.define('FechamentoFolhaColaborador', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        FechamentoFolhaId: {
            type: DataTypes.INTEGER,
        },
        FechamentoFolhaColaboradorId: {
            type: DataTypes.INTEGER,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'FechamentoFolhaColaborador'
    })

    return FechamentoFolhaColaborador
}
