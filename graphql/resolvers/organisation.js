const debug = require('debug')('graphql-organisation')
const fetch = require('node-fetch')
const services = require('services')

function organizations() {
  debug('Start fetching organizations')

  return fetch(`${services.organizations}`)
    .then(res => res.json())
    .then(organizations => {
      debug('...finished fetching organizations')

      return organizations
    })
}

function organization(root, { id }) {
  debug('Start fetching organization')

  return fetch(`${services.organizations}/${id}`)
    .then(res => res.json())
    .then(organization => {
      debug('...finished fetching organization')

      return organization
    })
}

exports.queries = { organization, organizations }
exports.resolvers = { }
