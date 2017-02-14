const type = `
  type Representative implements Person {
    id: String!
    firstName: String!
    lastName: String
    email: String!
    socialprofiles: [SocialProfile]
  }
`

const mutations = `
`

const queries = `
  representatives: [Representative]
  representative(id: String!): Representative
`

exports.type = type
exports.mutations = mutations
exports.queries = queries
exports.type = type
