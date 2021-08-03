import express from 'express'
//import { ApolloServer } from 'apollo-server-express'
import pkg from 'apollo-server-express';
const { ApolloServer } = pkg;
import resolvers from './resolvers/index.js'
import schema from './schema/index.js'
import { readDB } from './dbController.js'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      messages: readDB('messages'),
      users: readDB('users'),
    },
  },
})

const app = express()
server.start()
server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
    credentials: true,
  },
})

app.listen({ port: 8000 })
console.log('server listening on 8000...')
