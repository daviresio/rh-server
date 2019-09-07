const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Contador = sequelize.define('Contador', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING,
                ...message.notNull('nome'),
            },
            telefone: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                ...message.notNull('email')
            },
            softwareContabil: DataTypes.STRING,
            acessoAoSistemaDeContador: DataTypes.BOOLEAN,
            responsavelPor: DataTypes.STRING,
            idEmpresa: {
                type: DataTypes.INTEGER,
            },
        }, {
        tableName: 'Contador'
        }
    )

    Contador.associate = models => {
        Contador.hasMany(models.Ferias, {as: 'ferias', foreignKey: 'FeriasContadorId'})
    }

    return Contador
}
