const test = require('ava')
const { default: server } = require('server')

test('GET /attendees statusCode', async t => {
  await server.inject({
    url: '/attendees',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /attendees headers', async t => {
  await server.inject({
    url: '/attendees',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /attendees properties', async t => {
  await server.inject({
    url: '/attendees',
    method: 'GET'
  }).then(({ result: attendees }) => {
    attendees.forEach(attendee => {
      t.truthy(attendee.id)
      t.truthy(attendee.firstName)
      t.truthy(attendee.lastName)
      t.truthy(attendee.email)
      t.truthy(attendee.code)
    })
  })
})

test('GET /attendees/:id', async t => {
  await server.inject({
    url: '/attendees/abc-def',
    method: 'GET'
  }).then(({ result: attendee }) => {
    t.truthy(attendee.id)
    t.truthy(attendee.firstName)
    t.truthy(attendee.lastName)
    t.truthy(attendee.email)
    t.truthy(attendee.code)
  })
})
