const test = require('ava')
const { default: server } = require('server')

test('GET / statusCode', async t => {
  await server.inject({
    url: '/',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET / headers', async t => {
  await server.inject({
    url: '/',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET / properties', async t => {
  await server.inject({
    url: '/',
    method: 'GET'
  }).then(({ result: conferences }) => {
    conferences.forEach(conference => {
      t.truthy(conference.id)
      t.truthy(conference.name)
      t.truthy(conference.from)
      t.truthy(conference.until)
      t.truthy(conference.price)
    })
  })
})

test('GET /:id', async t => {
  await server.inject({
    url: '/abc-def',
    method: 'GET'
  }).then(({ result: conference }) => {
    t.truthy(conference.id)
    t.truthy(conference.name)
    t.truthy(conference.from)
    t.truthy(conference.until)
    t.truthy(conference.price)
  })
})
