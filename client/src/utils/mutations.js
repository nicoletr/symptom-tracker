import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
      }
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity(
    $name: String!
    $activityType: String!
    $duration: Int!
    $intensity: String!
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
      activityAuthor
      createdAt
      symptoms {
        _id
        symptomType
        rating {
          _id
          painLevel
          mood
        }
      }
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
    addActivity(
      name: $name
      activityType: $activityType
      ingredients: $ingredients
      portionSize: $portionSize
      date: $date
    ) {
      _id
      name
      mealAuthor
      createdAt
      symptoms {
        _id
        symptomType
        rating {
          _id
          painLevel
          mood
        }
      }
    }
  }
`;
