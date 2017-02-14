const test = require('ava')
const model = require('models/representative')

test('latest', t => {
  const amount = 2
  const representatives = model.latest(amount)

  t.is(representatives.length, amount)

  representatives.forEach(representative => {
    t.truthy(representative.id)
    t.truthy(representative.firstName)
    t.truthy(representative.lastName)
    t.truthy(representative.email)
  })
})

test('byId', t => {
  const id = 'abc-edf'
  const representative = model.byId(id)

  t.truthy(representative)
  t.is(representative.id, id)
})

test('byConferenceId', t => {
  const id = 'abc-edf'
  const representatives = model.byConferenceId(id)

  representatives.forEach(representative => {
    t.truthy(representative.id)
    t.truthy(representative.firstName)
    t.truthy(representative.lastName)
    t.truthy(representative.email)
  })
})
