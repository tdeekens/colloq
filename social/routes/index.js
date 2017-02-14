const { default: attachHealthRoutes } = require('routes/health')
const { default: attachMetricsRoutes } = require('routes/metrics')
const { default: attachProfilesRoutes } = require('routes/profiles')
const { default: attachTwitterRoutes } = require('routes/twitter')
const { default: attachGithubRoutes } = require('routes/github')

function attachRoutes(server) {
  attachHealthRoutes(server)
  attachMetricsRoutes(server)
  attachProfilesRoutes(server)
  attachTwitterRoutes(server)
  attachGithubRoutes(server)
}

exports.attachRoutes = attachRoutes
