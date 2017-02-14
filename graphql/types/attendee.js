const type = `
  type Attendee implements Person {
    id: String!
    firstName: String!
    lastName: String
    email: String!
    code: String!
    socialprofiles: [SocialProfile]
  }
`

const mutations = `
`

const queries = `
  attendees: [Attendee]
  attendee(id: String!): Attendee
`

exports.type = type
exports.mutations = mutations
exports.queries = queries
exports.type = type
