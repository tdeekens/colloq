const { isProduction } = require('envs')
const fixture = require('models/conference/fixtures')

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

exports.latest = latest
exports.byId = byId
