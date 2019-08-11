const bcrypt = require('bcrypt')
const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        email: {
            type: DataTypes.STRING,
            ...message.notNull('email'),
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            ...message.notNull('senha'),
            /* get() {
                 return this.getDataValue('senha')
             }*/
        },
        empresaLogada: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Usuario',
        hooks: {
            beforeCreate: generateHash,
            beforeUpdate: generateHash,
        },
    })

    Usuario.associate = models => {
        Usuario.belongsTo(models.Companhia, {as: 'companhia', foreignKey: 'UsuarioId'})
        Usuario.belongsToMany(models.Empresa, {through: 'UsuariosEmpresas', as: 'empresas'})
    }

    Usuario.prototype.compararSenha = async function (senha) {
        return await bcrypt.compareSync(senha, this.senha)
    }

    return Usuario
}


const generateHash = async usuario => {
    if (usuario.changed('senha')) {
        const salt = await bcrypt.genSaltSync(10)
        return usuario.senha = await bcrypt.hashSync(usuario.senha, salt)
    }
}
