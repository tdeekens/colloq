const debug = require('debug')('http-social')
const { default: get } = require('models/profiles')

exports.default = (req, reply) => {
  const { id } = req.id
  let profiles = get(id)

  debug('Start fetching profiles')

  debug('...finished fetching profiles')

  reply(profiles)
}
