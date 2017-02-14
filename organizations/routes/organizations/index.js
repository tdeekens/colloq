const { default: getOrganizations } = require('routes/organizations/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/{id?}',
    handler: getOrganizations
  })
}

exports.default = attachRoute
