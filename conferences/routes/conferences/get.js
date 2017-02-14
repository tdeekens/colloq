const debug = require('debug')('http-conferences')
const model = require('models/conference')

exports.default = (req, reply) => {
  const { id } = req.params
  let conferences

  debug('Start fetching conferences')

  if (id) {
    conferences = model.byId(id)
  } else {
    conferences = model.latest(20)
  }

  debug('...finished fetching conferences')

  reply(conferences || {})
}
