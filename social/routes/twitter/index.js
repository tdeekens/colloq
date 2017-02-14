const { default: getTwitterProfile } = require('routes/twitter/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/twitter/{handle?}',
    handler: getTwitterProfile
  })
}

exports.default = attachRoute
