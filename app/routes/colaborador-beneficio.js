const {ColaboradorBeneficio, Colaborador, Beneficio} = require('../models')
const query = require('../util/query')
const addIdEmpresa = require('../util/util').addIdEmpresa

module.exports.save = async (req, res) => {
    try {
        const data = req.body.map(v => {
            return {
                ColaboradorId: v.colaborador,
                BeneficioId: v.beneficio,
                idEmpresa: req.authData.empresa,
                custoEmpresa: v.custoEmpresa,
                custoColaborador: v.custoColaborador,
            }
        })
        data.forEach(async v => {
            const result = await ColaboradorBeneficio.create(v)
            console.log(Object.assign({}, result))
        })
        res.send(await Colaborador.findByPk(data[0].colaborador))
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}
