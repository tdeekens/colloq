const { isProduction } = require('envs')
const fixture = require('models/representative/fixtures')

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

exports.byConferenceId = byConferenceId
exports.latest = latest
exports.byId = byId
