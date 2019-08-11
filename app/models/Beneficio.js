const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Beneficio = sequelize.define('Beneficio', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        operador: {
            type: DataTypes.STRING,
            ...message.notNull('operador')
        },
        cnpjOperador: {
            type: DataTypes.STRING,
        },
        categoria: {
            type: DataTypes.STRING,
            ...message.notNull('categoria')
        },
        descontaFaltaMesAnterior: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        descontaFeriasMesSeguinte: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        descontaAfastamentosMesAnterior: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        descontaLicencasMesSeguinte: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        descontaFeriasMesCorrente: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        tipoCalculoSaldo: {
            allowNull: false,
            type: DataTypes.STRING
        },
        custoDaEmpresaPagoPeloColaborador: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        dataDeCorte: {
            allowNull: false,
            type: DataTypes.STRING
        },
        dataVencimentoContrato: {
            type: DataTypes.DATE
        },
        descricao: {
            type: DataTypes.STRING
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Beneficio'
    })
    Beneficio.associate = models => {
        Beneficio.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'BeneficioId'})
    }
    return Beneficio
}
