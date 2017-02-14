const debug = require('debug')('http-representatives')
const model = require('models/representative')

exports.default = (req, reply) => {
  const { id } = req.params
  let representatives

  debug('Start fetching representatives')

  if (id) {
    representatives = model.byId(id)
  } else {
    representatives = model.latest(20)
  }

  debug('...finished fetching representatives')

  reply(representatives || {})
}
