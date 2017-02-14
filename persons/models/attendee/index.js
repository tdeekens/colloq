const { isProduction } = require('envs')
const fixture = require('models/attendee/fixtures')

function latest(amount) {
  if (isProduction()) {
    throw new Error('No production database yet.')
  } else {
    return fixture.latest(amount)
  }
}

function byId(id) {
  if (isProduction()) {
    throw new Error('No production database yet.')
  } else {
    return fixture.byId(id)
  }
}

function byConferenceId(id) {
  if (isProduction()) {
    throw new Error('No production database yet.')
  } else {
    return fixture.byConferenceId(id)
  }
}

exports.latest = latest
exports.byConferenceId = byConferenceId
exports.byId = byId
