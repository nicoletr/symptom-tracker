import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      activities {
        _id
        name
        activityType
        date
        createdAt
      }
      meals {
        _id
        name
        mealType
        date
        createdAt
      }
    }
  }
`;

export const QUERY_ACTIVITIES = gql`
  query getActivities {
    activities {
      _id
      name
      activityType
      duration
      intensity
      date
      symptoms {
        _id
        symptomType
        painLevel
        mood
      }
    }
  }
`;

export const QUERY_MEALS = gql`
  query getMeals {
    meals {
      _id
      name
      mealType
      ingredients
      portionSize
      date
      symptoms {
        _id
        symptomType
        painLevel
        mood
      }
    }
  }
`;

export const QUERY_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity(activityId: $activityId) {
      _id
      name
      activityType
      duration
      intensity
      date
      symptoms {
        _id
        symptomType
        painLevel
        mood
      }
    }
  }
`;

export const QUERY_SINGLE_MEAL = gql`
  query getSingleMeal($mealId: ID!) {
    meal(mealId: $mealId) {
      _id
      name
      mealType
      ingredients
      portionSize
      date
      symptoms {
        _id
        symptomType
        painLevel
        mood
      }
    }
  }
`;

export const QUERY_SYMPTOMS = gql`
  query getSymptoms {
    symptoms {
      _id
      symptomType
      painLevel
      mood
    }
  }
`;

export const QUERY_SINGLE_SYMPTOM = gql`
  query getSingleSymptom($symptomId: ID!) {
    symptom(symptomId: $symptomId) {
      _id
      symptomType
      painLevel
      mood
      activities {
        _id
        name
        activityType
      }
      meals {
        _id
        name
        mealType
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      activities {
        _id
        name
        activityType
        date
        symptoms {
          _id
          symptomType
          painLevel
          mood
        }
      }
      meals {
        _id
        name
        mealType
        date
        symptoms {
          _id
          symptomType
          painLevel
          mood
        }
      }
      symptoms {
        _id
        symptomType
        painLevel
        mood
        activities {
          _id
          name
          activityType
        }
        meals {
          _id
          name
          mealType
        }
      }
    }
  }
`;
