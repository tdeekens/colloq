const { default: attachHealthRoutes } = require('routes/health')
const { default: attachMetricsRoutes } = require('routes/metrics')
const { default: attachConferencesRoutes } = require('routes/conferences')

function attachRoutes(server) {
  attachHealthRoutes(server)
  attachMetricsRoutes(server)
  attachConferencesRoutes(server)
}

exports.attachRoutes = attachRoutes
