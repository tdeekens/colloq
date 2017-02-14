const test = require('ava')
const { default: server } = require('server')

test('GET /profiles/{handle} statusCode', async t => {
  await server.inject({
    url: '/profiles/fat',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /profiles/{handle} headers', async t => {
  await server.inject({
    url: '/profiles/fat',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /profiles/{handle} properties', async t => {
  await server.inject({
    url: '/profiles/fat',
    method: 'GET'
  }).then(({ result: profiles }) => {
    const twitterProfile = profiles.filter(({ type }) => type === 'twitter')
    const githubProfile = profiles.filter(({ type }) => type === 'github')

    t.is(profiles.length, 2)
    t.truthy(twitterProfile)
    t.truthy(githubProfile)
  })
})
