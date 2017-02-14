const test = require('ava')
const { default: get } = require('models/twitter')

test('generate', t => {
  const profile = get('colour haze')

  t.truthy(profile.type)
  t.is(profile.type, 'twitter')
  t.truthy(profile.handle)
  t.truthy(profile.location)
  t.truthy(profile.followers)
  t.truthy(profile.following)
  t.truthy(profile.createdAt)
  t.truthy(profile.url)
})
