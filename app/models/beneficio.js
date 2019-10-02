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
        Beneficio.belongsToMany(models.Colaborador, {through: 'ColaboradorBeneficio', as: 'colaboradores', foreignKey: 'BeneficioId', otherKey: 'ColaboradorId'})
        Beneficio.belongsTo(models.CalculoSaldoBeneficio, {as: 'tipoCalculoSaldo', foreignKey: 'CalculoSaldoBeneficioId'})
        Beneficio.belongsTo(models.CategoriaBeneficio, {as: 'categoria', foreignKey: 'CategoriaBeneficioId'})
    }
    return Beneficio
}
