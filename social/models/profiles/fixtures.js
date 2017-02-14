const { generate: twitter } = require('models/twitter/fixtures')
const { generate: github } = require('models/github/fixtures')

function generate() {
  return [
    twitter(),
    github()
  ]
}

exports.generate = generate
