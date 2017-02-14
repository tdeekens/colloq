const test = require('ava')
const { default: server } = require('server')

test('GET /conference/{id}/attendees statusCode', async t => {
  await server.inject({
    url: '/conference/abc-def/attendees',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /conference/{id}/attendees headers', async t => {
  await server.inject({
    url: '/conference/abc-def/attendees',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /conference/{id}/attendees properties', async t => {
  await server.inject({
    url: '/conference/abc-def/attendees',
    method: 'GET'
  }).then(({ result: attendees }) => {
    attendees.forEach(attendees => {
      t.truthy(attendees.id)
      t.truthy(attendees.firstName)
      t.truthy(attendees.lastName)
      t.truthy(attendees.email)
      t.truthy(attendees.code)
    })
  })
})
