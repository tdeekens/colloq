const faker = require('faker')

function generate() {
  const handle = faker.internet.userName()

  return {
    type: 'github',
    handle,
    location: faker.address.city(),
    followers: faker.random.number(),
    following: faker.random.number(),
    createdAt: faker.date.past(),
    url: `https://github.com/${handle}`
  }
}

exports.generate = generate
