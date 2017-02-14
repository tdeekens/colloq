const { default: getAttendees } = require('routes/conference/attendees/get')
const { default: getSpeakers } = require('routes/conference/speakers/get')
const { default: getRepresentatives } = require('routes/conference/representatives/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/conference/{id}/attendees',
    handler: getAttendees
  })

  server.route({
    method: 'GET',
    path: '/conference/{id}/speakers',
    handler: getSpeakers
  })

  server.route({
    method: 'GET',
    path: '/conference/{id}/representatives',
    handler: getRepresentatives
  })
}

exports.default = attachRoute
