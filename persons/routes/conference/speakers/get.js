const debug = require('debug')('http-conference-speakers')
const model = require('models/speaker')

exports.default = (req, reply) => {
  const { id } = req.params
  let speakers

  debug('Start fetching speakers for conference')

  speakers = model.byConferenceId(id)

  debug('...finished fetching speakers for conference')

  reply(speakers || [])
}
