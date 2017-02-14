const debug = require('debug')('graphql-attendee')
const fetch = require('node-fetch')
const services = require('services')

function attendees() {
  debug('Start fetching attendees')

  return fetch(`${services.persons}/attendees`)
    .then(res => res.json())
    .then(attendees => {
      debug('...finished fetching attendees')

      return attendees
    })
}

function attendee(root, {
  id
}) {
  debug('Start fetching attendee')

  return fetch(`${services.persons}/attendees/${id}`)
    .then(res => res.json())
    .then(attendee => {
      debug('...finished fetching attendee')

      return attendee
    })
}

const Conference = {
  attendees({
    id
  }) {
    debug('Start fetching attendees for conference')

    return fetch(`${services.persons}/conference/${id}/attendees`)
      .then(res => res.json())
      .then(attendees => {
        debug('...finished fetching attendees for conference')

        return attendees
      })
  }
}

const SocialProfile = {
  socialprofiles({ id }) {
    debug('Start fetching social profiles for attendee')

    return fetch(`${services.social}/profiles/${id}`)
      .then(res => res.json())
      .then(profile => {
        debug('...finished fetching social profiles for attendee')

        return profile
      })
  }
}

exports.queries = {
  attendee,
  attendees
}
exports.resolvers = {
  Conference,
  SocialProfile
}
