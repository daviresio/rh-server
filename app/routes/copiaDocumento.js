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

module.exports.save = async (req, res, next) => {
    try {
        const {colaborador: CopiaDocumentoId, ferias: CopiaDocumentoFeriasId, desligamento: CopiaDocumentoDesligamentoId, ...data} = req.body;
        const result = await CopiaDocumento.create(addIdEmpresa({...data, CopiaDocumentoFeriasId, CopiaDocumentoId, CopiaDocumentoDesligamentoId}, req.authData.empresa));
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {
    try {
        await CopiaDocumento.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await CopiaDocumento.findByPk(req.body.id, {...getParams});
        res.send(result)
    } catch (e) {
        next(e)
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
