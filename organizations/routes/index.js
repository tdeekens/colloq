const { default: attachHealthRoutes } = require('routes/health')
const { default: attachMetricsRoutes } = require('routes/metrics')
const { default: attachOrganizationsRoutes } = require('routes/organizations')

function attachRoutes(server) {
  attachHealthRoutes(server)
  attachMetricsRoutes(server)
  attachOrganizationsRoutes(server)
}

exports.attachRoutes = attachRoutes
