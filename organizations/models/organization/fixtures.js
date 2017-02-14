const uuid = require('node-uuid')
const faker = require('faker')

function generate() {
  return {
    id: uuid.v4(),
    name: faker.company.companyName(),
    email: faker.internet.email(),
    url: faker.internet.url()
  }
}

function byId(id) {
  const organization = generate()
  organization.id = id

  return organization
}

function latest(amount) {
  return [...Array(amount)].map(generate)
}

exports.latest = latest
exports.byId = byId
