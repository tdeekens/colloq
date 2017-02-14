const test = require('ava')
const model = require('models/person')

test('latest', t => {
  const amount = 2
  const persons = model.latest(amount)

  t.is(persons.length, amount)

  persons.forEach(person => {
    t.truthy(person.id)
    t.truthy(person.firstName)
    t.truthy(person.lastName)
    t.truthy(person.email)
  })
})

test('byId', t => {
  const id = 'abc-edf'
  const person = model.byId(id)

  t.truthy(person)
  t.is(person.id, id)
})

test('byConferenceId', t => {
  const id = 'abc-edf'
  const persons = model.byConferenceId(id)

  persons.forEach(persons => {
    t.truthy(persons.id)
    t.truthy(persons.firstName)
    t.truthy(persons.lastName)
    t.truthy(persons.email)
  })
})
