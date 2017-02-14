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
  }).then(({ result: persons }) => {
    persons.forEach(person => {
      t.truthy(person.id)
      t.truthy(person.firstName)
      t.truthy(person.lastName)
      t.truthy(person.email)
    })
  })
})

test('GET /:id', async t => {
  await server.inject({
    url: '/abc-def',
    method: 'GET'
  }).then(({ result: person }) => {
    t.truthy(person.id)
    t.truthy(person.firstName)
    t.truthy(person.lastName)
    t.truthy(person.email)
  })
})
