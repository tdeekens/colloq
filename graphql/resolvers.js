const merge = Object.assign
const Attendee = require('resolvers/attendee')
const Representative = require('resolvers/representative')
const Speaker = require('resolvers/speaker')
const Organization = require('resolvers/organisation')
const Conference = require('resolvers/conference')
const SocialProfile = require('resolvers/socialprofile')

const resolvers = {
  Query: merge(
    Attendee.queries,
    Representative.queries,
    Speaker.queries,
    Organization.queries,
    Conference.queries,
    SocialProfile.queries
  ),
  Mutation: merge(
    Conference.mutations
  ),
  Conference: merge(
    Attendee.resolvers.Conference,
    Speaker.resolvers.Conference,
    Representative.resolvers.Conference
  ),
  Attendee: merge(
    Attendee.resolvers.SocialProfile
  ),
  Speaker: merge(
    Speaker.resolvers.SocialProfile
  ),
  Representative: merge(
    Representative.resolvers.SocialProfile
  )
}

exports.default = resolvers
