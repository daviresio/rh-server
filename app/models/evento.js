const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Evento = sequelize.define('Evento', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        codigo: {
            type: DataTypes.STRING,
            ...message.notNull('codigo')
        },
        eSocial: {
            type: DataTypes.STRING,
        },
        tipo: {
            type: DataTypes.STRING,
            ...message.notNull('tipo')
        },
        tributarIrrf: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        tributarInss: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        tributarFgts: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        considerarNoCalculoDsr: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        adicionarAoArquivoDeIntegracao: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        sobrescreverCalculoDoSistema: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        campoAtivo: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },

    }, {
        tableName: 'Evento'
    })

    return Evento
}
