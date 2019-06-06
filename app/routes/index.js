const routes = require('express').Router()

const cargo = require('./cargo')
const centroDeCusto = require('./centroDeCusto')
const contador = require('./contador')
const departamento = require('./departamento')
const sindicato = require('./sindicato')
const colaborador  = require('./colaborador')

routes.get('/cargos/:id', cargo.findById)
routes.get('/cargos', cargo.list)
routes.post('/cargos', cargo.save)
routes.put('/cargos', cargo.update)
routes.delete('/cargos/:id', cargo.delete)

routes.get('/departamentos/:id', departamento.findById)
routes.get('/departamentos', departamento.list)
routes.post('/departamentos', departamento.save)
routes.put('/departamentos', departamento.update)
routes.delete('/departamentos/:id', departamento.delete)

routes.get('/centrodecustos/:id', centroDeCusto.findById)
routes.get('/centrodecustos', centroDeCusto.list)
routes.post('/centrodecustos', centroDeCusto.save)
routes.put('/centrodecustos', centroDeCusto.update)
routes.delete('/centrodecustos/:id', centroDeCusto.delete)
routes.delete('/departamentos/:id', departamento.delete)

routes.get('/sindicatos/:id', sindicato.findById)
routes.get('/sindicatos', sindicato.list)
routes.post('/sindicatos', sindicato.save)
routes.put('/sindicatos', sindicato.update)
routes.delete('/sindicatos/:id', sindicato.delete)

routes.get('/colaboradores/:id', colaborador.findById)
routes.get('/colaboradores', colaborador.list)
routes.post('/colaboradores', colaborador.save)
routes.put('/colaboradores', colaborador.update)
routes.delete('/colaboradores/:id', colaborador.delete)



module.exports = routes
