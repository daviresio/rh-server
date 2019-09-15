const {CopiaDocumento, Colaborador, Ferias} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res) => {
    res.send(await CopiaDocumento.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
};

module.exports.findById = async (req, res) => {
    const result = await CopiaDocumento.findByPk(req.params.id, {...getParams});
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res) => {
    try {
        const {colaborador, ferias, desligamento, ...data} = req.body;
        const result = await CopiaDocumento.create(addIdEmpresa(
            {...data, CopiaDocumentoFeriasId: ferias, CopiaDocumentoId: colaborador, CopiaDocumentoDesligamentoId: desligamento}, req.authData.empresa));

        if (colaborador) await result.setColaborador(colaborador);
        if (ferias) await result.setFerias(colaborador);

        res.send(result)
    } catch (e) {
        console.log(e);
        res.send({erro: e.errors[0].message})
    }
};

module.exports.update = async (req, res) => {
    try {
        await CopiaDocumento.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await CopiaDocumento.findByPk(req.body.id, {...getParams});
        res.send(result)
    } catch (e) {
        res.send(e)
    }
};

module.exports.delete = async (req, res) => {
    await CopiaDocumento.destroy({where: {id: req.params.id}});
    res.status(200).send()
};


const getParams = {
    include: [
        {
            model: Colaborador,
            as: 'colaborador',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Ferias,
            as: 'ferias',
            attributes: {exclude: ['createdAt', 'updatedAt', 'FeriasContadorId', 'ferias']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt', 'CopiaDocumentoId', 'CopiaDocumentoFeriasId']
    }
};
