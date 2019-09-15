const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const Empresa = sequelize.define('Empresa', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        razaoSocial: {
            type: DataTypes.STRING,
        },
        cnpj: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        site: {
            type: DataTypes.STRING,
        },
        logo: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'Empresa'
    });
    Empresa.associate = models => {
        Empresa.belongsTo(models.Cobranca, {as: 'cobranca', foreignKey: 'CobrancaId'});
        Empresa.belongsTo(models.Configuracao, {as: 'configuracao', foreignKey: 'ConfiguracaoId'});
        Empresa.belongsTo(models.Companhia, {as: 'companhia', foreignKey: 'EmpresaId'});
        Empresa.hasMany(models.Minuta, {as: 'minutas', foreignKey: 'MinutaId'});
       // Empresa.hasMany(models.Sindicato, {as: 'sindicatos', foreignKey: 'SindicatoId'})
        Empresa.belongsToMany(models.Usuario, {through: 'UsuariosEmpresas', as: 'usuarios'})
    };
    return Empresa
};
