const debug = require('debug')('graphql-conference')
const fetch = require('node-fetch')
const sha1 = require('node-sha1')
const services = require('services')

function conferences() {
  debug('Start fetching conferences')

  return fetch(services.conferences)
    .then(res => res.json())
    .then(conferences => {
      debug('...finished fetching conferences')

      return conferences
    })
}

function conference(root, { name }) {
  const id = sha1(name)

  debug('Start fetching conference')

  return fetch(`${services.conferences}/${id}`)
    .then(res => res.json())
    .then(conference => {
      debug('...finished fetching conference')

      return conference
    })
}

function create(root, args) {
  const {
    name,
    from,
    until
  } = args

  return {
    id: sha1(name),
    name,
    from,
    until
  }
}

exports.queries = { conference, conferences }
exports.mutations = { createConference: create }
exports.resolvers = { }
