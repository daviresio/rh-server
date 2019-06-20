const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Colaborador = sequelize.define('Colaborador', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        foto: {
            type: DataTypes.STRING,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        email: {
            type: DataTypes.STRING,
        },
        gestor: {
            type: DataTypes.INTEGER,
        },
        matricula: {
            type: DataTypes.STRING,
        },
        primeiroEmprego: {
            ...message.notNull('primeiro emprego'),
            type: DataTypes.BOOLEAN,
        },
        pagouContribSindicalAnoAdmissao: {
            type: DataTypes.BOOLEAN,
        },
        dataExameAdmissional: {
            type: DataTypes.DATE,
        },
        dataAdmissao: {
            type: DataTypes.DATE,
        },
        vinculo: {
            type: DataTypes.STRING,
        },
        formaPagamento: {
            type: DataTypes.STRING,
        },
        salario: {
            type: DataTypes.DOUBLE,
        },
        //periodoExperiencia: {},
        //jornadaTrabalho: {},
        //contratos: [],
        preenchimentoPeloColaborador: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        dataNascimento: {
            type: DataTypes.DATE,
        },
        nacionalidade: {
            type: DataTypes.STRING,
        },
        corRaca: {
            type: DataTypes.STRING,
        },
        naturalEstado: {
            type: DataTypes.STRING,
        },
        naturalCidade: {
            type: DataTypes.STRING,
        },
        sexo: {
            type: DataTypes.STRING,
        },
        estadoCivil: {
            type: DataTypes.STRING,
        },
        nomeMae: {
            type: DataTypes.STRING,
        },
        nomePai: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        celular: {
            type: DataTypes.STRING,
        },
        //contatos: [],
        //dependentes: [],
        cpf: {
            type: DataTypes.STRING,
        },
        rg: {
            type: DataTypes.STRING,
        },
        dataExpedicaoRg: {
            type: DataTypes.DATE,
        },
        orgaoEmissorRg: {
            type: DataTypes.STRING,
        },
        ufEmissorRg: {
            type: DataTypes.STRING,
        },
        cnh: {
            type: DataTypes.STRING,
        },
        categoriaCnh: {
            type: DataTypes.STRING,
        },
        dataExpedicaoCnh: {
            type: DataTypes.DATE,
        },
        dataValidadeCnh: {
            type: DataTypes.DATE,
        },
        carteiraTrabalho: {
            type: DataTypes.STRING,
        },
        nSerieCtps: {
            type: DataTypes.STRING,
        },
        pis: {
            type: DataTypes.STRING,
        },
        tituloEleitor: {
            type: DataTypes.STRING,
        },
        zonaEleitoral: {
            type: DataTypes.STRING,
        },
        secaoEleitoral: {
            type: DataTypes.STRING,
        },
        estrangeiro: {
            type: DataTypes.BOOLEAN,
        },
        status: {
            type: DataTypes.STRING,
        }
        //copiaDocumentos: [],
        //beneficios: [],
    }, {
        tableName: 'Colaborador'
    })

    Colaborador.associate = models => {
        Colaborador.belongsTo(models.Cargo, {as: 'cargo', foreignKey: 'CargoId'})
        Colaborador.belongsTo(models.Departamento, {as: 'departamento', foreignKey: 'DepartamentoId'})
        Colaborador.belongsTo(models.CentroDeCusto, {as: 'centroDeCusto', foreignKey: 'CentroDeCustoId'})
        Colaborador.belongsTo(models.Sindicato, {as: 'sindicato', foreignKey: 'SindicatoId'})
        Colaborador.belongsTo(models.Endereco, {as: 'endereco', foreignKey: 'EnderecoId'})
        Colaborador.belongsTo(models.Escolaridade, {as: 'escolaridade', foreignKey: 'EscolaridadeId'})
        Colaborador.hasMany(models.CheckListColaborador, {as: 'checklist', foreignKey: 'CheckListId'})
    }

    return Colaborador
}
