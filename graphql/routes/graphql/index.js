const { graphqlHapi } = require('graphql-server-hapi')
const { default: executableSchema } = require('schema')
const { default: resolvers } = require('resolvers')

function attachRoute(server) {
  server.register({
    register: graphqlHapi,
    options: {
      path: '/',
      graphqlOptions: {
        schema: executableSchema(resolvers)
      },
      route: { cors: true }
    }
  })
}

exports.default = attachRoute
