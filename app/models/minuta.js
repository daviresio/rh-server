const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const Minuta = sequelize.define('Minuta', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        /*nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },*/
        conteudo: {
            type: DataTypes.STRING,
            ...message.notNull('conteudo'),
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Minuta'
    });

    Minuta.associate = models => {
        Minuta.belongsTo(models.Empresa, {as: 'empresa', foreignKey: 'MinutaId'})
    };
    return Minuta
};
