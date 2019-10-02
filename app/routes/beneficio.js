const {Beneficio, Colaborador, Vinculo, CalculoSaldoBeneficio, CategoriaBeneficio} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res) => {
    res.send(await Beneficio.findAll({...getParams, where: {idEmpresa: req.authData.empresa},}))
};

module.exports.findById = async (req, res) => {
    const result = await Beneficio.findByPk(req.params.id, {...getParams});
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res) => {
    try {
        const {tipoCalculoSaldo, categoria, ...data} = req.body
        const result = await Beneficio.create(addIdEmpresa(data, req.authData.empresa));
        await result.setCalculoSaldoBeneficio(tipoCalculoSaldo)
        await result.setCategoriaBeneficio(categoria)
        res.send(result)
    } catch (e) {
        console.log(e);
        res.status(500).send({erro: e.errors[0].message})
    }
};

module.exports.update = async (req, res) => {
    try {
        await Beneficio.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await Beneficio.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        res.send(e)
    }
};

module.exports.delete = async (req, res) => {
    await Beneficio.destroy({where: {id: req.params.id}});
    res.status(200).send()
};


const getParams = {
    include: [
        {
            model: Colaborador,
            as: 'colaboradores',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            include: [
                {model: Vinculo, as: 'vinculo'}
            ]
        }, {
        model: CalculoSaldoBeneficio,
            as: 'tipoCalculoSaldo',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }, {
        model: CategoriaBeneficio,
            as: 'categoria',
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        }
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
