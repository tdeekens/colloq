const uuid = require('node-uuid')
const { generate: person } = require('models/person/fixtures')

function generate() {
  const code = uuid.v4()

  return Object.assign(
    person(),
    { code: code.substring(0, code.indexOf('-')) }
  )
}

function latest(amount) {
  return [...Array(amount)].map(generate)
}

function byId(id) {
  const attendee = generate()

  attendee.id = id

  return attendee
}

function byConferenceId() {
  return latest(Math.floor(Math.random() * 10) + 1)
}

exports.latest = latest
exports.byConferenceId = byConferenceId
exports.byId = byId
