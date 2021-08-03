// import { gql } from 'apollo-server-express'
import pkg from 'apollo-server-express';
const { gql } = pkg;
import messageSchema from './message.js'
import userSchema from './user.js'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, messageSchema, userSchema]
