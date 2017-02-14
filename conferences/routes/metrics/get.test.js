const test = require('ava')
const { default: server } = require('server')

test('GET /metrics statusCode', async t => {
  await server.inject({
    url: '/metrics',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /metrics headers', async t => {
  await server.inject({
    url: '/metrics',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /health properties', async t => {
  await server.inject({
    url: '/metrics',
    method: 'GET'
  }).then(({ result: metrics }) => {
    t.truthy(metrics.uptime)
    t.truthy(metrics.mem)
    t.truthy(metrics.load)
    t.truthy(metrics.cpu)
  })
})
