const {Colaborador, Cargo, Departamento, CentroDeCusto, Sindicato, Endereco, Escolaridade} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Colaborador.findAll({
        ...query.removeTimestamp(), ...colaboradorParams
    }))
}

module.exports.findById = async (req, res) => {
    const result = await Colaborador.findByPk(req.params.id, {...query.removeTimestamp(), ...colaboradorParams})
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
        const colaborador = await Colaborador.create({...data})
        colaborador.setCargo(cargo)
        colaborador.setDepartamento(departamento)
        colaborador.setCentroDeCusto(centroDeCusto)
        colaborador.setSindicato(sindicato)
        res.send(colaborador)
    } catch (e) {
        console.log(e)
        const erro = e.errors ? e.errors[0].message : e
        res.status(500).send({erro})
    }
}

module.exports.update = async (req, res) => {
    try {
        const {endereco, cargo, departamento, centroDeCusto, sindicato, escolaridade, banco, ...colaborador} = req.body

        await Colaborador.update({...colaborador}, {
            where: {
                id: req.body.id
            },
        })

        let colaboradorSaved = await Colaborador.findByPk(req.body.id, {
            ...query.removeTimestamp(),
            ...colaboradorParams,
        })

        if (cargo) await colaboradorSaved.setCargo(cargo)
        if (departamento) await colaboradorSaved.setDepartamento(departamento)
        if (centroDeCusto) await colaboradorSaved.setCentroDeCusto(centroDeCusto)
        if (sindicato) await colaboradorSaved.setSindicato(sindicato)

        if (endereco) {
            if (endereco.id) {
                await Endereco.update({...endereco}, {where: {id: endereco.id}})
                await colaboradorSaved.setEndereco(endereco.id)
            } else if (typeof endereco === 'number') {
                await colaboradorSaved.setEndereco(endereco)
            } else {
                const enderecoSaved = await Endereco.create({...endereco})
                await enderecoSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (escolaridade) {
            if (escolaridade.id) {
                await Escolaridade.update({...escolaridade}, {where: {id: escolaridade.id}})
                await colaboradorSaved.setEscolaridade(escolaridade.id)
            } else if (typeof escolaridade === 'number') {
                await colaboradorSaved.setEscolaridade(escolaridade)
            } else {
                const escolaridadeSaved = await Escolaridade.create({...escolaridade})
                await escolaridadeSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (banco) {
            if (banco.id) {
                await banco.update({...banco}, {where: {id: banco.id}})
                await colaboradorSaved.setBanco(banco.id)
            } else if (typeof banco === 'number') {
                await colaboradorSaved.setBanco(banco)
            } else {
                const bancoSaved = await Escolaridade.create({...banco})
                await bancoSaved.setColaborador(colaboradorSaved.id)
            }
        }

        colaboradorSaved = await Colaborador.findByPk(req.body.id, {
            ...query.removeTimestamp(),
            ...colaboradorParams,
        })

        res.send(colaboradorSaved)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Colaborador.destroy({where: {id: req.params.id}})
    res.status(200).send()
}


const colaboradorParams = {
    include: [
        {
            model: Cargo,
            as: 'cargo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Departamento,
            as: 'departamento',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: CentroDeCusto,
            as: 'centroDeCusto',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Sindicato,
            as: 'sindicato',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Escolaridade,
            as: 'escolaridade',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Endereco,
            as: 'endereco',
            attributes: {exclude: ['createdAt', 'updatedAt', 'ColaboradorId']}
        }
    ],
    exclude: ['createdAt', 'updatedAt', 'CargoId', 'DepartamentoId', 'EnderecoId', 'CentroDeCustoId', 'SindicatoId', 'EscolaridadeId']
}
