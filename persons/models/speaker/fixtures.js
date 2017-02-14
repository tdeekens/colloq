const { generate: person } = require('models/person/fixtures')

function generate() {
  return Object.assign(person())
}

function latest(amount) {
  return [...Array(amount)].map(generate)
}

function byId(id) {
  const speaker = generate()

  speaker.id = id

  return speaker
}

function byConferenceId() {
  return latest(Math.floor(Math.random() * 10) + 1)
}

exports.latest = latest
exports.byConferenceId = byConferenceId
exports.byId = byId
