module.exports = (sequelize, DataTypes) => {

    const Companhia = sequelize.define('Companhia', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        site: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'Companhia'
    })

    Companhia.associate = models => {
        Companhia.hasMany(models.Empresa, {as: 'empresas', foreignKey: 'EmpresaId'})
        Companhia.hasMany(models.Usuario, {as: 'usuarios', foreignKey: 'UsuarioId'})
    }
    return Companhia
}
