const getToken = require("./auth").getToken;
const eventosPreDefinidos = require('../models/evento').eventosPreDefinidos;

const {Companhia, Usuario, Empresa, Evento, Cobranca} = require('../models');
const query = require('../util/query');

const fila = require('../../config/mqService');




module.exports.list = async (req, res) => {
    res.send(await Companhia.findAll({...query.removeTimestamp(), ...params}))
};

module.exports.findById = async (req, res) => {
    const result = await Companhia.findByPk(req.params.id, {...query.removeTimestamp(), ...params});
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res, next) => {

    const {empresa, usuario} = req.body;

    try {
        const result = await Companhia.create({});
        const empresaSaved = await Empresa.create({...empresa, email: usuario.email});
        const cobranca = await Cobranca.create({
            razaoSocial: empresa.razaoSocial,
            cnpj: empresa.cnpj,
            telefone: empresa.telefone,
            email: usuario.email,
        });
        await cobranca.setEmpresa(empresaSaved.id);

        eventosPreDefinidos.forEach(async v => await Evento.create({...v, idEmpresa: empresaSaved.id}));

        const usuarioSaved = await Usuario.create({...usuario, empresaLogada: empresaSaved.id});
        await usuarioSaved.addEmpresa(empresaSaved.id);
        await usuarioSaved.setCompanhia(result.id);
        await empresaSaved.setCompanhia(result.id);
        const token = getToken(usuarioSaved.id, empresaSaved.id);
        fila.send(fila.queue.MAIL_QUEUE, usuario.email, fila.type.MAIL_MARKETING_BOAS_VINDAS, {nome: usuario.nome});
        res.json({token})
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {
    try {
        await Companhia.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await Companhia.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.delete = async (req, res) => {
    await Companhia.destroy({where: {id: req.params.id}});
    res.status(200).send()
};


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
};
