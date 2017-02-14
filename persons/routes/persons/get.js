const debug = require('debug')('http-persons')
const model = require('models/person')

exports.default = (req, reply) => {
  const { id } = req.params
  let persons

  debug('Start fetching persons')

  if (id) {
    persons = model.byId(id)
  } else {
    persons = model.latest(20)
  }

  debug('...finished fetching persons')

  reply(persons || {})
}
