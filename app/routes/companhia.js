const getToken = require("./auth").getToken;

const {Companhia, Usuario, Empresa} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Companhia.findAll({...query.removeTimestamp(), ...params}))
}

module.exports.findById = async (req, res) => {
    const result = await Companhia.findByPk(req.params.id, {...query.removeTimestamp(), ...params})
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    console.log(req.body)
    const {empresa, usuario} = req.body
    try {
        console.log(usuario)
        const result = await Companhia.create({})
        const empresaSaved = await Empresa.create({...empresa})
        const usuarioSaved = await Usuario.create({...usuario, empresaLogada: empresaSaved.id})
        await usuarioSaved.addEmpresa(empresaSaved.id)
        await usuarioSaved.setCompanhia(result.id)
        await empresaSaved.setCompanhia(result.id)
        const token = getToken(usuarioSaved.id, empresaSaved.id)
        //const response = await Companhia.findByPk(result.id, {include: [{model: Usuario, as: 'usuarios'}, {model: Empresa, as: 'empresas'}]})
        res.json({token})
    } catch (e) {
        console.log(e)
        res.status(500).send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Companhia.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Companhia.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Companhia.destroy({where: {id: req.params.id}})
    res.status(200).send()
}


const params = {
    include: [
        {
            model: Usuario,
            as: 'usuarios',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Empresa,
            as: 'empresas',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ]
}
