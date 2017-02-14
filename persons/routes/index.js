const { default: attachHealthRoutes } = require('routes/health')
const { default: attachMetricsRoutes } = require('routes/metrics')
const { default: attachPersonsRoutes } = require('routes/persons')
const { default: attachAttendeesRoutes } = require('routes/attendees')
const { default: attachConferenceRoutes } = require('routes/conference')
const { default: attachSpeakersRoutes } = require('routes/speakers')
const { default: attachRepresentativesRoutes } = require('routes/representatives')

function attachRoutes(server) {
  attachHealthRoutes(server)
  attachMetricsRoutes(server)
  attachPersonsRoutes(server)
  attachAttendeesRoutes(server)
  attachConferenceRoutes(server)
  attachSpeakersRoutes(server)
  attachRepresentativesRoutes(server)
}

exports.attachRoutes = attachRoutes
