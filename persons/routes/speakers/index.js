const { default: getSpeakers } = require('routes/speakers/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/speakers/{id?}',
    handler: getSpeakers
  })
}

exports.default = attachRoute
