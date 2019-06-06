const app = require('express')()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./app/routes')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)

app.listen(4000, ()=> console.log('server on'))
