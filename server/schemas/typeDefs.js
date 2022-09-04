const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    location: String
    community: Community
  }

  type Community {
    _id: ID
    name: String
    location: String
    users: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    communities: [Community]
    commmunity(id: ID!): Community
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCommunity(name: String!): Community
    updateUser(location: String!,community:String!): Auth
  }
`;

module.exports = typeDefs;
