const {ConfiguracaoSindicato, Sindicato, TipoAdicionalSindicato} = require('../models');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res) => {
    res.send(await ConfiguracaoSindicato.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
};

module.exports.findById = async (req, res) => {
    const result = await ConfiguracaoSindicato.findByPk(req.params.id, getParams);
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res, next) => {
    try {
        const {sindicato, tipo, ...data} = req.body;
        const result = await ConfiguracaoSindicato.create(addIdEmpresa(data, req.authData.empresa));
        await result.setSindicato(sindicato);
        await result.setTipoAdicionalSindicato(tipo);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res) => {
    try {
        await ConfiguracaoSindicato.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await ConfiguracaoSindicato.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        res.send(e)
    }
};

module.exports.delete = async (req, res) => {
    await ConfiguracaoSindicato.destroy({where: {id: req.params.id}});
    res.status(200).send()
};

const getParams = {
    include: [
        {
            model: TipoAdicionalSindicato,
            as: 'tipo',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};