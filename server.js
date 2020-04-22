// Env
require('dotenv').config()
const config = require('./api/config')

// Server
const express = require('express')
const server = express()

// Cors
const cors = require('cors')
server.use(cors())

// Body parser
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

// Logs
// const morganBody = require('morgan-body')
// morganBody(server)

// Declare file to serve static file
const path = require('path')
server.use(express.static(path.join(__dirname, './build')))

// Routes
server.listen(config.PORT, () => {
  mongoose.set('useFindAndModify', false)
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

// Mongodb
const mongoose = require('mongoose')
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => {
  require('./api/routes')(server)
  console.log(`Server started on port ${config.PORT}`)
})
