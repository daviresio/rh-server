const message = require('../util/validationMessage');

module.exports = (sequelize, DataTypes) => {

    const Contador = sequelize.define('Contador', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING,
                ...message.notNull('nome'),
            },
            telefone: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                ...message.notNull('email')
            },
            softwareContabil: DataTypes.STRING,
            acessoAoSistemaDeContador: DataTypes.BOOLEAN,
            responsavelPor: DataTypes.STRING,
            idEmpresa: {
                type: DataTypes.INTEGER,
            },
        }, {
        tableName: 'Contador'
        }
    );

    Contador.associate = models => {
        Contador.belongsToMany(models.Ferias, {through: 'FeriasContador', as: 'ferias', foreignKey: 'ContadorId', otherKey: 'FeriasId'});
        Contador.belongsToMany(models.Desligamento, {through: 'DesligamentoContador', as: 'desligamentos', foreignKey: 'ContadorId', otherKey: 'DesligamentoId'})
    };

    return Contador
};
