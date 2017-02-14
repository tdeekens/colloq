const { makeExecutableSchema } = require('graphql-tools')
const Person = require('types/person')
const Attendee = require('types/attendee')
const Representative = require('types/representative')
const Speaker = require('types/speaker')
const Organization = require('types/organisation')
const Conference = require('types/conference')
const SocialProfile = require('types/socialprofile')

const schema = `
  type Query {
    ${Attendee.queries}
    ${Representative.queries}
    ${Speaker.queries}
    ${Organization.queries}
    ${Conference.queries}
    ${SocialProfile.queries}
  }

  ${Person.type}
  ${Attendee.type}
  ${Representative.type}
  ${Speaker.type}
  ${Organization.type}
  ${Conference.type}
  ${SocialProfile.type}

  type Mutation {
    ${Conference.mutations}
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

function executableSchema(resolvers) {
  return makeExecutableSchema({
    typeDefs: schema,
    resolvers
  })
}

exports.default = executableSchema
exports.schema = schema
