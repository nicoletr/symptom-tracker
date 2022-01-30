const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    activities: [Activity]
    meals: [Meal]
  }

  type Activity {
    _id: ID
    name: String
    activityType: String
    duration: Int
    intensity: String
    date: String
    symptoms: [Symptom]
  }

  type Meal {
    _id: ID
    name: String
    mealType: String
    ingredients: [String]
    portionSize: String
    date: String
    symptoms: [Symptom]
  }

  type Symptom {
    _id: ID
    symptomType: String
    rating: Rating
  }

  type Rating {
    _id: ID
    painLevel: Int
    mood: String
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
    meals(username: String): [Meal]
    meal(mealId: ID!): Meal
    symptoms(username: String): [Symptom]
    symptom(symptomId: ID!): Symptom
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addActivity(
      name: String!
      activityType: String!
      duration: Int!
      intensity: String!
      date: String!
    ): Auth
    addMeal(
      name: String!
      mealType: String!
      ingredients: [String]!
      portionSize: String!
      date: String!
    ): Auth
    updateUser(username: String, email: String, password: String): User
    updateActivity(_id: ID!): Activity
    updateMeal(_id: ID!): Meal
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
