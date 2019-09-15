const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const Ferias = sequelize.define('Ferias', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        inicioPeriodoAquisitivo: {
            allowNull: false,
            type: DataTypes.DATE
        },
        finalPeriodoAquisitivo: {
            type: DataTypes.DATE
        },
        vencimento: {
            type: DataTypes.DATE
        },
        segundoVencimento: {
            type: DataTypes.DATE
        },
        diasDeAbono: {
            type: DataTypes.INTEGER
        },
        diasDeFerias: {
            type: DataTypes.INTEGER
        },
        totalDias: {
            type: DataTypes.INTEGER
        },
        anteciparParcelaDecimoTerceiro: {
            type: DataTypes.BOOLEAN
        },
        justificativa: {
            type: DataTypes.STRING
        },
        feriasColetivas: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        status: {
            defaultValue: 'PENDENTE',
            type: DataTypes.STRING,
        },
        comentarioParaContador: {
            type: DataTypes.STRING,
        },
        documentosAssinadosPeloRh: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        aprovadoPeloGestorConcluido: {
            defaultValue: 'PENDENTE',
            type: DataTypes.STRING,
        },
        aprovadoPeloRhConcluido: {
            defaultValue: 'PENDENTE',
            type: DataTypes.STRING,
        },
        enviadoParaContabilidadeConcluido: {
            defaultValue: 'PENDENTE',
            type: DataTypes.STRING,
        },
        calculosContabilidadeConcluido: {
            defaultValue: 'PENDENTE',
            type: DataTypes.STRING,
        },
        conclusoesConcluido: {
            defaultValue: 'PENDENTE',
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Ferias'
    });

    Ferias.associate = models => {
        Ferias.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'FeriasId'});
        Ferias.hasMany(models.CopiaDocumento, {as: 'copiaDocumentos', foreignKey: 'CopiaDocumentoFeriasId'});
        Ferias.belongsToMany(models.Contador, {through: 'FeriasContador', as: 'contadores', foreignKey: 'FeriasId', otherKey: 'ContadorId'})
    };

    return Ferias
};
