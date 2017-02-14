const debug = require('debug')('http-organizations')
const model = require('models/organization')

exports.default = (req, reply) => {
  const { id } = req.params
  let organizations

  debug('Start fetching organizations')

  if (id) {
    organizations = model.byId(id)
  } else {
    organizations = model.latest(20)
  }

  debug('...finished fetching organizations')

  reply(organizations || {})
}
