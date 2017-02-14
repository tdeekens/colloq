const { default: getConferences } = require('routes/conferences/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/{id?}',
    handler: getConferences
  })
}

exports.default = attachRoute
