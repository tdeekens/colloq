const debug = require('debug')('graphql-socialprofile')
const fetch = require('node-fetch')
const services = require('services')

function socialprofiles(root, { id }) {
  debug('Start fetching social profiles')

  return fetch(`${services.social}/profiles/${id}`)
    .then(res => res.json())
    .then(profiles => {
      debug('...finished fetching social profiles')

      return profiles
    })
}

exports.queries = { socialprofiles }
exports.resolvers = { }
