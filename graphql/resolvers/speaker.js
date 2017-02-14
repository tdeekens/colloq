const debug = require('debug')('graphql-speaker')
const fetch = require('node-fetch')
const services = require('services')

function speakers() {
  debug('Start fetching speakers')

  return fetch(`${services.persons}/speakers`)
    .then(res => res.json())
    .then(speakers => {
      debug('...finished fetching speakers')

      return speakers
    })
}

function speaker(root, { id }) {
  debug('Start fetching speaker')

  return fetch(`${services.persons}/speakers/${id}`)
    .then(res => res.json())
    .then(speaker => {
      debug('...finished fetching speaker')

      return speaker
    })
}

const Conference = {
  speakers({ id }) {
    debug('Start fetching speakers for conference')

    return fetch(`${services.persons}/conference/${id}/speakers`)
      .then(res => res.json())
      .then(speakers => {
        debug('...finished fetching speakers for conference')

        return speakers
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

exports.queries = { speaker, speakers }
exports.resolvers = { Conference, SocialProfile }
