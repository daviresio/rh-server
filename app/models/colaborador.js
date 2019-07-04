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
        salario: {
            type: DataTypes.DOUBLE,
        },
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
        dataEmissaoCtps: {
            type: DataTypes.DATE,
        },
        ufCtps: {
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
            allowNull: false,
            defaultValue: "PENDENTE",
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        tableName: 'Colaborador'
    })

    Colaborador.associate = models => {
        Colaborador.belongsTo(models.Cargo, {as: 'cargo', foreignKey: 'CargoId'})
        Colaborador.belongsTo(models.Banco, {as: 'banco', foreignKey: 'BancoId'})
        Colaborador.belongsTo(models.Departamento, {as: 'departamento', foreignKey: 'DepartamentoId'})
        Colaborador.belongsTo(models.CentroDeCusto, {as: 'centroDeCusto', foreignKey: 'CentroDeCustoId'})
        Colaborador.belongsTo(models.Sindicato, {as: 'sindicato', foreignKey: 'SindicatoId'})
        Colaborador.belongsTo(models.Endereco, {as: 'endereco', foreignKey: 'EnderecoId'})
        Colaborador.belongsTo(models.Escolaridade, {as: 'escolaridade', foreignKey: 'EscolaridadeId'})
        Colaborador.hasMany(models.CheckList, {as: 'checkList', foreignKey: 'CheckListId'})
        Colaborador.belongsTo(models.JornadaTrabalho, {as: 'jornadaTrabalho', foreignKey: 'JornadaTrabalhoId'})
        Colaborador.belongsTo(models.Vinculo, {as: 'vinculo', foreignKey: 'VinculoId'})
        Colaborador.belongsTo(models.FormaPagamento, {as: 'formaPagamento', foreignKey: 'FormaPagamentoId'})
        Colaborador.belongsTo(models.PeriodoExperiencia, {as: 'periodoExperiencia', foreignKey: 'PeriodoExperienciaId'})
        Colaborador.hasMany(models.Contato, {as: 'contatos', foreignKey: 'ContatoId'})
        Colaborador.hasMany(models.Dependente, {as: 'dependentes', foreignKey: 'DependenteId'})
        Colaborador.hasMany(models.Beneficio, {as: 'beneficios', foreignKey: 'BeneficioId'})
        Colaborador.hasMany(models.CopiaDocumento, {as: 'copiaDocumentos', foreignKey: 'CopiaDocumentoId'})
    }

    return Colaborador
}
