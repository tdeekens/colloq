const debug = require('debug')('http-attendees')
const model = require('models/attendee')

exports.default = (req, reply) => {
  const { id } = req.params
  let attendees

  debug('Start fetching attendees')

  if (id) {
    attendees = model.byId(id)
  } else {
    attendees = model.latest(20)
  }

  debug('...finished fetching attendees')

  reply(attendees || {})
}
