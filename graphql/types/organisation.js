const type = `
  type Organization {
    name: String!
    representatives: [Representative]!
    url: String!
    email: String!
  }
`

const mutations = `
`

const queries = `
  organizations: [Organization]
  organization(id: String!): Organization
`

exports.type = type
exports.mutations = mutations
exports.queries = queries
exports.type = type
