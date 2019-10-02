const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const Desligamento = sequelize.define('Desligamento', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        dataAviso: {
            type: DataTypes.DATE
        },
        dataDesligamento: {
            allowNull: false,
            type: DataTypes.DATE
        },
        exameDemissional: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        dataExameDemissional: {
            type: DataTypes.DATE
        },
        desvincularBeneficios: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        observacoes: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Desligamento'
    });

    Desligamento.associate = models => {
        Desligamento.hasMany(models.CopiaDocumento, {as: 'copiaDocumentos', foreignKey: 'CopiaDocumentoDesligamentoId'});
        Desligamento.belongsToMany(models.Contador, {through: 'DesligamentoContador', as: 'contadores', foreignKey: 'DesligamentoId', otherKey: 'ContadorId'});
        Desligamento.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'DesligamentoId'})
        Desligamento.belongsTo(models.TipoAvisoPrevio, {as: 'aviso', foreignKey: 'TipoAvisoPrevioId'})
        Desligamento.belongsTo(models.TipoDesligamento, {as: 'tipo', foreignKey: 'TipoDesligamentoId'})
    };

    return Desligamento
};
