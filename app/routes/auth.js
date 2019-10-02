const jwt = require('jsonwebtoken')
const {Usuario} = require('../models')

const SECRET_JWT_KEY = 'S3crete'

const getToken = (usuario, empresa) => jwt.sign({usuario, empresa}, SECRET_JWT_KEY, {expiresIn: '100d'})

module.exports.getToken = getToken

module.exports.login = async (req, res) => {

    const usuario = await Usuario.findOne({where: {email: req.body.usuario}})
    if (usuario === null) {
        res.status(401).send({erro: 'Usuario nao existe'})
        return
    }

    const senhaCorreta = await usuario.compararSenha(req.body.senha)

    if (senhaCorreta) {
        res.json({token: getToken(usuario.id, usuario.empresaLogada)})
    } else {
        res.status(401).send({erro: 'Senha incorreta'})
    }
}

module.exports.verifyToken = exclude => (req, res, next) => {

    if (exclude.some(v => v.route === req.originalUrl && v.method === req.method)) {
        next()
        return
    }

    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== "undefined") {
        req.token = bearerHeader.split(' ')[1]
        jwt.verify(req.token, SECRET_JWT_KEY, (err, authData) => {
            if (err) {
                res.status(403).send()
            } else {
                req.authData = authData
                next()
            }
        })
    } else {
        res.status(403).send()
    }
}
