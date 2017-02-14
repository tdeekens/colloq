const { default: getMetrics } = require('routes/metrics/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/metrics',
    handler: getMetrics
  })
}

exports.default = attachRoute
