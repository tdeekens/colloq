const test = require('ava')
const model = require('models/organization')

test('latest', t => {
  const amount = 2
  const organizations = model.latest(amount)

  t.is(organizations.length, amount)

  organizations.forEach(organization => {
    t.truthy(organization.id)
    t.truthy(organization.name)
    t.truthy(organization.email)
    t.truthy(organization.url)
  })
})

test('byId', t => {
  const id = 'abc-edf'
  const organization = model.byId(id)

  t.truthy(organization)
  t.is(organization.id, id)
})
