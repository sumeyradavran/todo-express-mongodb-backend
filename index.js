const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
require('./models/Todos')

require('./dotEnv')

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('connected'))
  .catch((err) => console.log('err', err))
const app = express()

app.use(express.json())
app.use(cors())
require('./swagger/swagger')(app)

require('./routes/Todo')(app)

const port = process.env.PORT || 8000

app.listen(port, () => console.log('Server Up and running'))
