const test = require('ava')
const { default: server } = require('server')

test('GET /speakers statusCode', async t => {
  await server.inject({
    url: '/speakers',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /speakers headers', async t => {
  await server.inject({
    url: '/speakers',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /speakers properties', async t => {
  await server.inject({
    url: '/speakers',
    method: 'GET'
  }).then(({ result: speakers }) => {
    speakers.forEach(speaker => {
      t.truthy(speaker.id)
      t.truthy(speaker.firstName)
      t.truthy(speaker.lastName)
      t.truthy(speaker.email)
    })
  })
})

test('GET /speakers/:id', async t => {
  await server.inject({
    url: '/speakers/abc-def',
    method: 'GET'
  }).then(({ result: speakers }) => {
    t.truthy(speakers.id)
    t.truthy(speakers.firstName)
    t.truthy(speakers.lastName)
    t.truthy(speakers.email)
  })
})
