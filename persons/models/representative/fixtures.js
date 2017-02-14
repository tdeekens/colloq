const { generate: person } = require('models/person/fixtures')

function generate() {
  return Object.assign(person())
}

function latest(amount) {
  return [...Array(amount)].map(generate)
}

function byId(id) {
  const representative = generate()

  representative.id = id

  return representative
}

function byConferenceId() {
  return latest(Math.floor(Math.random() * 10) + 1)
}

exports.latest = latest
exports.byConferenceId = byConferenceId
exports.byId = byId
