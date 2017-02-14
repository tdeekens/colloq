const test = require('ava')
const { default: server } = require('server')

test('GET /organizations statusCode', async t => {
  await server.inject({
    url: '/',
    method: 'GET'
  }).then(({ statusCode }) => {
    t.is(statusCode, 200)
  })
})

test('GET /organizations headers', async t => {
  await server.inject({
    url: '/',
    method: 'GET'
  }).then(({ headers }) => {
    t.is(headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('GET /organizations properties', async t => {
  await server.inject({
    url: '/',
    method: 'GET'
  }).then(({ result: organizations }) => {
    organizations.forEach(organization => {
      t.truthy(organization.id)
      t.truthy(organization.name)
      t.truthy(organization.email)
      t.truthy(organization.url)
    })
  })
})

test('GET /organizations/:id', async t => {
  await server.inject({
    url: '/abd-def',
    method: 'GET'
  }).then(({ result: conference }) => {
    t.truthy(conference.id)
    t.truthy(conference.name)
    t.truthy(conference.email)
    t.truthy(conference.url)
  })
})
