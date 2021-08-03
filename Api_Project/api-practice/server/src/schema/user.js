//import { gql } from 'apollo-server-express'
import pkg from 'apollo-server-express';
const { gql } = pkg;

const userSchema = gql`
  type User {
    id: ID!
    nickname: String!
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }
`

export default userSchema
