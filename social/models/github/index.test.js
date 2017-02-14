const test = require('ava')
const { default: get } = require('models/github')

test('get', t => {
  const profile = get('dawg')

  t.truthy(profile.type)
  t.is(profile.type, 'github')
  t.truthy(profile.handle)
  t.truthy(profile.location)
  t.truthy(profile.followers)
  t.truthy(profile.following)
  t.truthy(profile.createdAt)
  t.truthy(profile.url)
})
