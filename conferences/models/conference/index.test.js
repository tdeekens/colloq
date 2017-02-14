const test = require('ava')
const model = require('models/conference')

test('latest', t => {
  const amount = 2
  const conferences = model.latest(amount)

  t.is(conferences.length, amount)

  conferences.forEach(conference => {
    t.truthy(conference.id)
    t.truthy(conference.name)
    t.truthy(conference.from)
    t.truthy(conference.until)
    t.truthy(conference.price)
  })
})

test('byId', t => {
  const id = 'abc-edf'
  const conference = model.byId(id)

  t.truthy(conference)
  t.is(conference.id, id)
})
