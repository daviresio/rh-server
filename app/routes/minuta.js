const {Minuta, Empresa} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res, next) => {
    res.send(await Minuta.findAll({...query.removeTimestamp(), include: [{model: Empresa, as: 'empresa'}], where: {idEmpresa: req.authData.empresa}}))
};

module.exports.findById = async (req, res) => {
    const result = await Minuta.findByPk(req.params.id, query.removeTimestamp());
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res, next) => {
    try {
        const result = await Minuta.create(addIdEmpresa(req.body, req.authData.empresa));
        await result.setEmpresa(req.authData.empresa);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {
    console.log(req.body);
    try {
        await Minuta.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await Minuta.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.delete = async (req, res, next) => {
    try {
        await Minuta.destroy({where: {id: req.params.id}});
        res.status(200).send()
    } catch (e) {
        next(e)
    }
};
