const {ColaboradorBeneficio, Colaborador, Beneficio} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.save = async (req, res, next) => {
    try {
        const data = req.body.map(v => {
            return {
                ColaboradorId: v.colaborador,
                BeneficioId: v.beneficio,
                idEmpresa: req.authData.empresa,
                custoEmpresa: v.custoEmpresa,
                custoColaborador: v.custoColaborador,
            }
        });
        data.forEach(async v => {
            const result = await ColaboradorBeneficio.create(v);
            console.log(Object.assign({}, result))
        });
        res.send(await Colaborador.findByPk(data[0].colaborador))
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {

    try {
        await ColaboradorBeneficio.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await ColaboradorBeneficio.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.updateAll = async (req, res, next) => {
    console.log(req.body.colaboradores.filter(v => v.beneficios.map(x => x.ColaboradorBeneficio)))
    /*try {
        await ColaboradorBeneficio.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await ColaboradorBeneficio.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        next(e)
    }*/
};
