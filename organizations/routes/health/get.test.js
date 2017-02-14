const test = require('ava')
const { default: server } = require('server')

test('GET /health statusCode', async t => {
  await server.inject({
    url: '/health',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /health headers', async t => {
  await server.inject({
    url: '/health',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /health properties', async t => {
  await server.inject({
    url: '/health',
    method: 'GET'
  }).then(({ result: health }) => {
    t.is(health.status, 'ok')
  })
})
