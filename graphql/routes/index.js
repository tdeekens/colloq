const { default: attachHealthRoutes } = require('routes/health')
const { default: attachMetricsRoutes } = require('routes/metrics')
const { default: attachGraphQLRoutes } = require('routes/graphql')
const { default: attachGraphiQLRoutes } = require('routes/graphiql')

function attachRoutes(server) {
  attachHealthRoutes(server)
  attachMetricsRoutes(server)
  attachGraphQLRoutes(server)
  attachGraphiQLRoutes(server)
}

exports.attachRoutes = attachRoutes
