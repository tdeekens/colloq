const debug = require('debug')('http-social')
const { default: get } = require('models/github')

exports.default = (req, reply) => {
  const { handle } = req.params
  const github = get(handle)

  debug('Start fetching github profile')

  debug('...finished fetching github profile')

  reply(github)
}
