import supertest from 'supertest'
import { app } from '../server'
import { getCustomers } from '../database'

let request: supertest.Test
let server

describe('#newCustomer', () => {
  beforeAll(() => {
    server = app.listen()
  })
  afterAll(() => {
    server.close()
  })

  beforeEach(() => {
    request = supertest(server).post('/graphql').set('Accept', 'application/json')
    // .expect('Content-Type', /json/)
    // .expect(200)
  })

  test('adds a customer to the database', async () => {
    const res = await request.send({
      query: `
        mutation NewCustomer($name: String!) {
          newCustomer(name: $name) { id }
        }`,
      variables: { name: 'cust1' },
    })
    expect(getCustomers()).toHaveLength(1)
  })
})
