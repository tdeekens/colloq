const { default: getGithubProfile } = require('routes/github/get')

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/github/{handle?}',
    handler: getGithubProfile
  })
}

exports.default = attachRoute
