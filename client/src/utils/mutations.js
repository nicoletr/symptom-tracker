import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity(
    $name: String!
    $activityType: String!
    $duration: String!
    $intensity: Int!
    $date: String!
  ) {
    addActivity(
      name: $name
      activityType: $activityType
      duration: $duration
      intensity: $intensity
      date: $date
    ) {
      _id
      name
      activityType
      duration
      intensity
      date
    }
  }
`;

export const ADD_MEAL = gql`
  mutation addMeal(
    $name: String!
    $mealType: String!
    $ingredients: String!
    $portionSize: String!
    $date: String!
  ) {
    addMeal(
      name: $name
      mealType: $mealType
      ingredients: $ingredients
      portionSize: $portionSize
      date: $date
    ) {
      _id
      name
      mealType
      ingredients
      portionSize
      date
    }
  }
`;

export const ADD_SYMPTOM = gql`
  mutation addSymptom($symptomType: String!, $painLevel: Int!, $mood: String!) {
    addSymptom(symptomType: $symptomType, painLevel: $painLevel, mood: $mood) {
      _id
      symptomType
      painLevel
      mood
    }
  }
`;
