const debug = require('debug')('graphql-represenative')
const fetch = require('node-fetch')
const services = require('services')

function representatives() {
  debug('Start fetching representatives')

  return fetch(`${services.persons}/representatives`)
    .then(res => res.json())
    .then(representatives => {
      debug('...finished fetching representatives')

      return representatives
    })
}

function representative(root, { id }) {
  debug('Start fetching representative')

  return fetch(`${services.persons}/representative/${id}`)
    .then(res => res.json())
    .then(representative => {
      debug('...finished fetching representative')

      return representative
    })
}

const Conference = {
  representatives({ id }) {
    debug('Start fetching representatives for conference')

    return fetch(`${services.persons}/conference/${id}/representatives`)
      .then(res => res.json())
      .then(representatives => {
        debug('...finished fetching representatives for conference')

        return representatives
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

exports.queries = { representative, representatives }
exports.resolvers = { Conference, SocialProfile }
