const type = `type Conference {
  id: String!,
  name: String!
  price: Float!
  from: String!
  until: String!
  attendees: [Attendee]
  speakers: [Speaker]
  representatives: [Representative]
}`

const mutations = `
  createConference(name: String!, from: String!, until: String!): Conference
`

const queries = `
  conferences: [Conference]
  conference(name: String!): Conference
`

exports.type = type
exports.mutations = mutations
exports.queries = queries
exports.type = type
