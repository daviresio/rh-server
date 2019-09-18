const app = require('express')()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./app/routes')
const errorHandler = require('./config/error-handler')

const auth = require('./app/routes/auth').verifyToken([
    {route: '/companhias', method: 'POST'},
    {route: '/login', method: 'POST'},
])

const PORT = 4000
const HOST = '0.0.0.0'

app.use(cors())
//app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(auth)

app.use('/', routes)

app.use(errorHandler)

app.listen(PORT, HOST, () => console.log('server on'))
