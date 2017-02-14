const { default: getAttendees } = require('routes/attendees/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/attendees/{id?}',
    handler: getAttendees
  })
}

exports.default = attachRoute
