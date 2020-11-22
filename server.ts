import { ApolloServer, gql } from 'apollo-server-koa'
import Koa from 'koa'
import { addCustomer } from './database'

const typeDefs = gql`
  type Customer {
    id: String!
    name: String!
  }

  type Ad {
    id: String!
    name: String!
    price: Int!
    description: String!
  }

  interface Discount {
    id: String!
    name: String!
    customer: Customer!
    ad: Ad!
    dateTime: String!
  }

  type VolumeDiscount implements Discount {
    id: String!
    name: String!
    customer: Customer!
    ad: Ad!
    dateTime: String!
    buyN: Int!
    getN: Int!
  }

  type SpecialPriceDiscount implements Discount {
    id: String!
    name: String!
    customer: Customer!
    ad: Ad!
    dateTime: String!
    price: Int!
  }

  type AdPurchase {
    id: String!
    customer: Customer!
    ad: Ad!
    qty: Int!
  }

  type Query {
    customers: [Customer]!
  }

  type Mutation {
    newCustomer(name: String!): Customer!
  }
`

const resolvers = {
  Discount: {
    __resolveType: (discount) =>
      discount.buyN ? 'VolumeDiscount' : discount.price ? 'SpecialPriceDiscount' : null,
  },

  Query: {
    customers: () => [],
  },

  Mutation: {
    newCustomer: (_, { name }) => addCustomer(name),
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const app = new Koa()

app.use(apolloServer.getMiddleware())
