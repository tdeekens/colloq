const debug = require('debug')('http-conference-representatives')
const model = require('models/representative')

exports.default = (req, reply) => {
  const { id } = req.params
  let representatives

  debug('Start fetching representatives for conference')

  representatives = model.byConferenceId(id)

  debug('...finished fetching representatives for conference')

  reply(representatives || [])
}
