const test = require('ava')
const { default: server } = require('server')

test('GET /representatives statusCode', async t => {
  await server.inject({
    url: '/representatives',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /representatives headers', async t => {
  await server.inject({
    url: '/representatives',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /representatives properties', async t => {
  await server.inject({
    url: '/representatives',
    method: 'GET'
  }).then(({ result: representatives }) => {
    representatives.forEach(representative => {
      t.truthy(representative.id)
      t.truthy(representative.firstName)
      t.truthy(representative.lastName)
      t.truthy(representative.email)
    })
  })
})

test('GET /representatives/:id', async t => {
  await server.inject({
    url: '/representatives/abc-def',
    method: 'GET'
  }).then(({ result: representative }) => {
    t.truthy(representative.id)
    t.truthy(representative.firstName)
    t.truthy(representative.lastName)
    t.truthy(representative.email)
  })
})
