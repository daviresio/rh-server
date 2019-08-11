const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Recado = sequelize.define('Recado', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        titulo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('titulo')
        },
        descricao: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('descricao')
        },
        midia: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('midia')
        },
        categoria: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('categoria')
        },
        notificarPorEmail: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            ...message.notNull('notificarPorEmail')
        },
        enviaParaTodosColaboradores: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
            ...message.notNull('enviaParaTodosColaboradores')
        },
        //TODO enviar para lista de departamentos e colaboradores
        arquivo: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Recado'
    })

    return Recado
}
