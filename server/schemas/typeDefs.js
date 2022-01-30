const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Activity {
    _id: ID
    name: String
    activityType: String
    duration: Int
    intensity: String
    date: Date
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    activities(username: String): [Activity]
    activity(activityId: ID!): Activity
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addActivity(
      name: String!
      activityType: String!
      duration: Int!
      intensity: String!
      date: Date!
    ): Auth
    updateUser(username: String, email: String, password: String): User
    updateActivity(_id: ID!): Activity
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
