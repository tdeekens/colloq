const type = `
  type Speaker implements Person {
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
  speakers: [Speaker]
  speaker(id: String!): Speaker
`

exports.type = type
exports.mutations = mutations
exports.queries = queries
exports.type = type
