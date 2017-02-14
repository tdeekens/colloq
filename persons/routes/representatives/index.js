const { default: getRepresentatives } = require('routes/representatives/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/representatives/{id?}',
    handler: getRepresentatives
  })
}

exports.default = attachRoute
