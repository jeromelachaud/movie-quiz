// Env
require('dotenv').config()
const config = require('./api/config')

// Create server instance
const express = require('express')
const server = express()

// Cors
const cors = require('cors')
server.use(cors())

// Body parser
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

// Declare path to serve static file
const path = require('path')
server.use(express.static(path.join(__dirname, './build')))

// Routes
const routes = require('./api/routes')
server.use('/', routes)

// Mongodb
const mongoose = require('mongoose')
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
mongoose.connection.on('error', error => console.log('connection error', error))
mongoose.connection.once('open', () => {
  console.log(`mongodb connected`)
})

server.listen(config.PORT, () => {
  console.log(`server listening on port ${config.PORT}`)
})
