const faker = require('faker')

function generate() {
  const handle = faker.internet.userName()

  return {
    type: 'twitter',
    handle,
    location: faker.address.city(),
    followers: faker.random.number(),
    following: faker.random.number(),
    createdAt: faker.date.past(),
    url: `https://twitter.com/${handle}`
  }
}

exports.generate = generate
