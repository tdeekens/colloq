const test = require('ava')
const { default: server } = require('server')

test('GET /github/{handle} statusCode', async t => {
  await server.inject({
    url: '/github/dawg',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /github/{handle} headers', async t => {
  await server.inject({
    url: '/github/dawg',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /github/{handle} properties', async t => {
  await server.inject({
    url: '/github/dawg',
    method: 'GET'
  }).then(({ result: profile }) => {
    t.truthy(profile.type)
    t.is(profile.type, 'github')
    t.truthy(profile.handle)
    t.truthy(profile.location)
    t.truthy(profile.followers)
    t.truthy(profile.following)
    t.truthy(profile.createdAt)
    t.truthy(profile.url)
  })
})
