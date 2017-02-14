const { graphiqlHapi } = require('graphql-server-hapi')

function attachRoute(server) {
  server.register({
    register: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: server.info.uri
      },
      route: { cors: true }
    }
  })
}

exports.default = attachRoute
