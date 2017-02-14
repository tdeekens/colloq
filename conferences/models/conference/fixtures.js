const uuid = require('node-uuid')
const faker = require('faker')

function generate() {
  return {
    id: uuid.v4(),
    name: `${faker.company.catchPhraseAdjective()}-${faker.company.bsBuzz()}`,
    from: faker.date.future(),
    until: faker.date.future(),
    price: faker.finance.amount()
  }
}

function byId(id) {
  const conference = generate()
  conference.id = id

  return conference
}

function latest(amount) {
  return [...Array(amount)].map(generate)
}

exports.latest = latest
exports.byId = byId
