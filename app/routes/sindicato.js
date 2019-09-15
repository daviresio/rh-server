const {Sindicato, ConfiguracaoSindicato} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res) => {
    res.send(await Sindicato.findAll({...getParams, where: {idEmpresa: req.authData.empresa}}))
};

module.exports.findById = async (req, res) => {
    const result = await Sindicato.findByPk(req.params.id, getParams);
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res) => {
    try {
        const result = await Sindicato.create(addIdEmpresa(req.body, req.authData.empresa));
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
};

module.exports.update = async (req, res) => {
    try {
        await Sindicato.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await Sindicato.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        res.send(e)
    }
};

module.exports.delete = async (req, res) => {
    await Sindicato.destroy({where: {id: req.params.id}});
    res.status(200).send()
};

const getParams = {
    include: [
        {
            model: ConfiguracaoSindicato,
            as: 'configuracoes',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};

