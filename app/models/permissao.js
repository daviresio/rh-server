const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Permissao = sequelize.define('Permissao', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        supervisorPodeVerCargo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        supervisorPodeVerDepartamento: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        supervisorPodeVerAdmissao: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        supervisorPodeVerSalario: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        funcionarioPodeVerSeusDados: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Permissao'
    })
    Permissao.associate = models => {
        Permissao.hasOne(models.Configuracao, {as: 'configuracao', foreignKey: 'PermissaoId'})
    }
    return Permissao
}
