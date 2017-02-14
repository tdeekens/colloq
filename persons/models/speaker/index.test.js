const test = require('ava')
const model = require('models/speaker')

test('latest', t => {
  const amount = 2
  const speakers = model.latest(amount)

  t.is(speakers.length, amount)

  speakers.forEach(speaker => {
    t.truthy(speaker.id)
    t.truthy(speaker.firstName)
    t.truthy(speaker.lastName)
    t.truthy(speaker.email)
  })
})

test('byId', t => {
  const id = 'abc-edf'
  const speaker = model.byId(id)

  t.truthy(speaker)
  t.is(speaker.id, id)
})

test('byConferenceId', t => {
  const id = 'abc-edf'
  const speakers = model.byConferenceId(id)

  speakers.forEach(speaker => {
    t.truthy(speaker.id)
    t.truthy(speaker.firstName)
    t.truthy(speaker.lastName)
    t.truthy(speaker.email)
  })
})
