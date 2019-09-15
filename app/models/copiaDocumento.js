const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const CopiaDocumento = sequelize.define('CopiaDocumento', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        /*tipo: {
            type: DataTypes.STRING,
        },*/
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        url: {
            type: DataTypes.STRING,
            ...message.notNull('url'),
        },
        necessitaAssinatura: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        assinado: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'CopiaDocumento'
    });

    CopiaDocumento.associate = models => {
        CopiaDocumento.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'CopiaDocumentoId'});
        CopiaDocumento.belongsTo(models.Ferias, {as: 'ferias', foreignKey: 'CopiaDocumentoFeriasId'});
        CopiaDocumento.belongsTo(models.Desligamento, {as: 'desligamento', foreignKey: 'CopiaDocumentoDesligamentoId'})
    };
    return CopiaDocumento
};
