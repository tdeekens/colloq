const test = require('ava')
const { default: get } = require('models/profiles')

test('generate', t => {
  const profiles = get('snoop')

  t.is(profiles.length, 2)
})
