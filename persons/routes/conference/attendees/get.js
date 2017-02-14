const debug = require('debug')('http-conference-attendees')
const model = require('models/attendee')

exports.default = (req, reply) => {
  const { id } = req.params
  let attendees

  debug('Start fetching attendees for conference')

  attendees = model.byConferenceId(id)

  debug('...finished fetching attendees for conference')

  reply(attendees || [])
}
