const debug = require('debug')('http-persons')
const env = require('node-env-file')

env(`./.${process.env.NODE_ENV}`)

const Hapi = require('hapi')
const { attachRoutes } = require('routes')

const server = new Hapi.Server()

server.connection({
  host: process.env.host,
  port: process.env.port
})

attachRoutes(server)

server.start(err => {
  if (err) {
    throw err
  }

  debug(`Persons HTTP/API running at: ${server.info.uri}`)
})

exports.default = server
