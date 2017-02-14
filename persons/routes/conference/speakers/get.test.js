const test = require('ava')
const { default: server } = require('server')

test('GET /conference/{id}/speakers statusCode', async t => {
  await server.inject({
    url: '/conference/abc-def/speakers',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /conference/{id}/speakers headers', async t => {
  await server.inject({
    url: '/conference/abc-def/speakers',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /conference/{id}/speakers properties', async t => {
  await server.inject({
    url: '/conference/abc-def/speakers',
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
