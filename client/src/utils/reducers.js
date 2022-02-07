import { useReducer } from "react";

// Import all actions
import {
  ADD_USER,
  ADD_ACTIVITY,
  ADD_MEAL,
  ADD_SYMPTOM,
  UPDATE_USER,
  UPDATE_ACTIVITY,
  UPDATE_MEAL,
  REMOVE_ACTIVITY,
  REMOVE_MEAL,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newUserId = state.users[state.users.length - 1].id + 1;

      const newUser = { ...action.payload, id: newUserId };

      return {
        ...state,
        users: [...state.users, newUser],
      };
    }
    // TODO: all actions below need to be updated to reflect against respective logged in users
    case ADD_ACTIVITY: {
      const newActivityId =
        state.activities[state.activities.length - 1].id + 1;

      const newActivity = { ...action.payload, id: newActivityId };

      return {
        ...state,
        activities: [...state.activities, newActivity],
      };
    }
    case ADD_MEAL: {
      const newMealId = state.meals[state.meals.length - 1].id + 1;

      const newMeal = { ...action.payload, id: newMealId };

      return {
        ...state,
        meals: [...state.meals, newMeal],
      };
    }
    case ADD_SYMPTOM: {
      const newSymptomId = state.symptoms[state.symptoms.length - 1].id + 1;

      const newSymptom = { ...action.payload, id: newSymptomId };

      return {
        ...state,
        symptoms: [...state.symptoms, newSymptom],
      };
    }
    case UPDATE_USER: {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      const updatedUser = {
        ...state.users[userIndex],
        ...action.payload,
      };

      const newUsersList = [...state.users];

      newUsersList[userIndex] = updatedUser;

      return {
        ...state,
        users: newUsersList,
      };
    }
    case UPDATE_ACTIVITY: {
      const activityIndex = state.activities.findIndex(
        (activity) => activity.id === action.payload.id
      );

      const updatedActivity = {
        ...state.activities[activityIndex],
        ...action.payload,
      };

      const newActivitiesList = [...state.activities];

      newActivitiesList[activityIndex] = updatedActivity;

      return {
        ...state,
        users: newActivitiesList,
      };
    }
    case UPDATE_MEAL: {
      const mealIndex = state.meals.findIndex(
        (meal) => meal.id === action.payload.id
      );

      const updatedMeal = {
        ...state.meals[mealIndex],
        ...action.payload,
      };

      const newMealsList = [...state.meals];

      newMealsList[mealIndex] = updatedMeal;

      return {
        ...state,
        users: newMealsList,
      };
    }
    case REMOVE_ACTIVITY: {
      return {
        ...state,
        activities: [...state.activities].filter(
          (activity) => activity.id !== action.payload
        ),
      };
    }
    case REMOVE_MEAL: {
      return {
        ...state,
        meals: [...state.meals].filter((meal) => meal.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}
