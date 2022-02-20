const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    activities: [Activity]
    meals: [Meal]
    symptoms: [Symptom]
  }

  type Activity {
    _id: ID
    name: String
    activityType: String
    duration: String
    intensity: String
    date: String
    createdAt: String
    symptoms: [Symptom]
  }

  type Meal {
    _id: ID
    name: String
    mealType: String
    ingredients: [String]
    portionSize: String
    date: String
    createdAt: String
    symptoms: [Symptom]
  }

  type Symptom {
    _id: ID
    symptomType: String
    painLevel: String
    mood: String
    activities: [Activity]
    meals: [Meal]
  }

  type Auth {
    token: ID!
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
      duration: String!
      intensity: Int!
      date: String!
    ): Activity!
    addMeal(
      name: String!
      mealType: String!
      ingredients: String!
      portionSize: String!
      date: String!
    ): Meal!
    addSymptom(symptomType: String!, painLevel: Int!, mood: String!): Symptom!
    updateUser(username: String, email: String, password: String): User
    updateActivity(_id: ID!): Activity
    updateMeal(_id: ID!): Meal
    removeActivity(_id: ID!): Activity
    removeMeal(_id: ID!): Meal
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
