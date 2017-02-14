const { default: getPersons } = require('routes/persons/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/{id?}',
    handler: getPersons
  })
}

exports.default = attachRoute
