const app = require('express')()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./app/routes')

const PORT = 4000
const HOST = '0.0.0.0'

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)

app.listen(PORT, HOST,()=> console.log('server on'))
