const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
require('./models/Todos')

require('./dotenv')

mongoose.connect(process.env.DB_CONNECT)
const app = express()

app.use(express.json())
app.use(cors())

require('./routes/Todo')(app)

const port = process.env.PORT || 8000

app.listen(port, () => console.log('Server Up and running'))
