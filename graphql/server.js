const debug = require('debug')('http-graphql')
const env = require('node-env-file')
const Hapi = require('hapi')
const { attachRoutes } = require('routes')

const server = new Hapi.Server()

env(`./.${process.env.NODE_ENV}`)

server.connection({
  host: process.env.host,
  port: process.env.port
})

attachRoutes(server)

server.start(err => {
  if (err) {
    throw err
  }

  debug(`GraphQL API running at: ${server.info.uri}`)
})
