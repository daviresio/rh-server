const {Empresa, Usuario, Evento, Cobranca, Minuta} = require('../models');
const query = require('../util/query');
const eventosPreDefinidos = require('../models/evento').eventosPreDefinidos;
const getToken = require("./auth").getToken;

module.exports.list = async (req, res) => {
    res.send(await Empresa.findAll({...getParams}))
};

module.exports.findById = async (req, res) => {
    const result = await Empresa.findByPk(req.params.id, {...getParams});
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res, next) => {
    try {

        const usuario = await Usuario.findOne({where: {email: req.body.email}})

        const senhaCorreta = await usuario.compararSenha(req.body.senha)

        if (!senhaCorreta) {
           throw new Error('senha incorreta')
        }

        const result = await Empresa.create({...req.body, nome: req.body.razaoSocial});

        Cobranca.create({
            razaoSocial: result.razaoSocial,
            cnpj: result.cnpj,
            telefone: result.telefone,
            email: result.email,
            CobrancaId: result.id
        })

        await Usuario.update({empresaLogada: result.id}, {where: {id: usuario.id}});
        await usuario.addEmpresa(result.id);

        eventosPreDefinidos.forEach(async v => await Evento.create({...v, idEmpresa: result.id}));

        const token = getToken(usuario.id, result.id);
        res.json({token})

    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res) => {
    try {
        await Empresa.update({...req.body}, {
            where: {
                id: req.body.id
            }
        });
        const result = await Empresa.findByPk(req.body.id, {...getParams});
        res.send(result)
    } catch (e) {
        res.send(e)
    }
};

module.exports.delete = async (req, res) => {
    await Empresa.destroy({where: {id: req.params.id}});
    res.status(200).send()
};

module.exports.trocarEmpresa = async (req, res, next) => {
    try {
       await Usuario.update({empresaLogada: req.body.empresa}, {where: {id: req.body.usuario}})

        const token = getToken(req.body.usuario, req.body.empresa)
        res.json({token})
    } catch (e) {
        next(e)
    }
}


const getParams = {
    include: [
        {
            model: Cobranca,
            as: 'cobranca',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Minuta,
            as: 'minutas',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
};
