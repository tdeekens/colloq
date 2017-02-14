const debug = require('debug')('http-persons')
const model = require('models/speaker')

exports.default = (req, reply) => {
  const { id } = req.params
  let speakers

  debug('Start fetching speakers')

  if (id) {
    speakers = model.byId(id)
  } else {
    speakers = model.latest(20)
  }

  debug('...finished fetching speakers')

  reply(speakers || {})
}
