const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const JornadaTrabalho = sequelize.define('JornadaTrabalho', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        entradaDomingo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaDomingo'),
        },
        saidaDomingo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaDomingo'),
        },
        inicioIntervaloDomingo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloDomingo'),
        },
        fimIntervaloDomingo: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloDomingo'),
        },
        entradaSegunda: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaSegunda'),
        },
        saidaSegunda: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaSegunda'),
        },
        inicioIntervaloSegunda: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloSegunda'),
        },
        fimIntervaloSegunda: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloSegunda'),
        },
        entradaTerca: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaTerca'),
        },
        saidaTerca: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaTerca'),
        },
        inicioIntervaloTerca: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloTerca'),
        },
        fimIntervaloTerca: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloTerca'),
        },
        entradaQuarta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaQuarta'),
        },
        saidaQuarta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaQuarta'),
        },
        inicioIntervaloQuarta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloQuarta'),
        },
        fimIntervaloQuarta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloQuarta'),
        },
        entradaQuinta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaQuinta'),
        },
        saidaQuinta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaQuinta'),
        },
        inicioIntervaloQuinta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloQuinta'),
        },
        fimIntervaloQuinta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloQuinta'),
        },
        entradaSexta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaSexta'),
        },
        saidaSexta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaSexta'),
        },
        inicioIntervaloSexta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloSexta'),
        },
        fimIntervaloSexta: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloSexta'),
        },
        entradaSabado: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('entradaSabado'),
        },
        saidaSabado: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('saidaSabado'),
        },
        inicioIntervaloSabado: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('inicioIntervaloSabado'),
        },
        fimIntervaloSabado: {
            allowNull: false,
            type: DataTypes.STRING,
            ...message.notNull('fimIntervaloSabado'),
        },
    }, {
        tableName: 'JornadaTrabalho'
    })

    JornadaTrabalho.associate = models => {
        JornadaTrabalho.hasOne(models.Colaborador, {as: 'colaborador', foreignKey: 'JornadaTrabalhoId'})
    }
    return JornadaTrabalho
}
