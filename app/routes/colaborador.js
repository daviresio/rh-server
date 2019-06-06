const {Colaborador, Cargo, Departamento, CentroDeCusto, Sindicato} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Colaborador.findAll({
        ...query.removeTimestamp(), include: [
            {
                model: Cargo,
                as: 'cargo'
            },
            {
                model: Departamento,
                as: 'departamento'
            },
        ],
        attributes: {exclude: ['CargoId', 'DepartamentoId']}
    }))
}

module.exports.findById = async (req, res) => {
    const result = await Colaborador.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {cargo, departamento, centroDeCusto, sindicato, ...data} = req.body
        console.log(req.body)
        const colaborador = await Colaborador.create(data)
        colaborador.setCargo(cargo)
        colaborador.setDepartamento(departamento)
        colaborador.setCentroDeCusto(centroDeCusto)
        colaborador.setSindicato(sindicato)
        res.send(colaborador)
    } catch (e) {
        const erro = e.errors ? e.errors[0].message : e
        res.send({erro})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Colaborador.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Colaborador.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Colaborador.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
