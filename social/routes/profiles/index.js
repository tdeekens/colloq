const { default: getProfiles } = require('routes/profiles/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/profiles/{id}',
    handler: getProfiles
  })
}

exports.default = attachRoute
