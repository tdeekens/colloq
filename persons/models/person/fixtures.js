const uuid = require('node-uuid')
const faker = require('faker')

function generate() {
  return {
    id: uuid.v4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
  }
}

function latest(amount) {
  return [...Array(amount)].map(generate)
}

function byId(id) {
  const person = generate()

  person.id = id

  return person
}

function byConferenceId() {
  return latest(Math.floor(Math.random() * 10) + 1)
}

exports.generate = generate
exports.latest = latest
exports.byConferenceId = byConferenceId
exports.byId = byId
