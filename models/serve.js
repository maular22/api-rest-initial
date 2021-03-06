const express = require('express')

const cors = require('cors')

const { dbConnection } = require('../database/config')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    //Connect DB

    this.connectDb()

    /// Middlewares
    this.middlewares()

    //Routes app
    this.routes()
  }

  async connectDb() {
    await dbConnection()
  }
  middlewares() {
    //Cors
    this.app.use(cors())

    //parcear json
    this.app.use(express.json())

    //Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

module.exports = Server
