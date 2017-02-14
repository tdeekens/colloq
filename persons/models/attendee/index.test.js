const test = require('ava')
const model = require('models/attendee')

test('latest', t => {
  const amount = 2
  const attendees = model.latest(amount)

  t.is(attendees.length, amount)

  attendees.forEach(attendee => {
    t.truthy(attendee.id)
    t.truthy(attendee.firstName)
    t.truthy(attendee.lastName)
    t.truthy(attendee.email)
    t.truthy(attendee.code)
  })
})

test('byId', t => {
  const id = 'abc-edf'
  const attendee = model.byId(id)

  t.truthy(attendee)
  t.is(attendee.id, id)
})

test('byConferenceId', t => {
  const id = 'abc-edf'
  const attendees = model.byConferenceId(id)

  attendees.forEach(attendee => {
    t.truthy(attendee.id)
    t.truthy(attendee.firstName)
    t.truthy(attendee.lastName)
    t.truthy(attendee.email)
    t.truthy(attendee.code)
  })
})
