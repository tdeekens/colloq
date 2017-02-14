const { default: getHealth } = require('routes/health/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/health',
    handler: getHealth
  })
}

exports.default = attachRoute
