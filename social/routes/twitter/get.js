const debug = require('debug')('http-social')
const { default: get } = require('models/twitter')

exports.default = (req, reply) => {
  const { handle } = req.params
  const twitter = get(handle)

  debug('Start fetching twitter profile')

  debug('...finished fetching twitter profile')

  reply(twitter)
}
