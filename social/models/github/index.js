const { isProduction } = require('envs')
const fixture = require('models/github/fixtures')

function get() {
  if (isProduction()) {
    throw new Error('No production database yet.')
  } else {
    return fixture.generate()
  }
}

exports.default = get
