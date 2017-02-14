const type = `
  type SocialProfile {
    type: String!
    handle: String
    url: String
    location: String!
    followers: Int!
    following: Int!
    created_at: String!
  }
`

const mutations = `
`

const queries = `
  socialprofiles(id: String!): [SocialProfile]
`

exports.type = type
exports.mutations = mutations
exports.queries = queries
exports.type = type
