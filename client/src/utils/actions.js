/*
 * ADD_USER:
 * - takes a user object as payload with parameters
 * - creates new ID for user based on previous last user
 * - pushes new user to the end of copy of users array
 * - updates users array
 */
export const ADD_USER = "ADD_USER";

/*
 * ADD_ACTIVITY:
 * - takes an activity object as payload with parameters
 * - creates new ID for activity based on previous last activity
 * - pushes new activity to the end of copy of activities array
 * - updates activities array
 */
export const ADD_ACTIVITY = "ADD_ACTIVITY";

/*
 * ADD_MEAL:
 * - takes a meal object as payload with parameters
 * - creates new ID for meal based on previous last meal
 * - pushes new meal to the end of copy of meals array
 * - updates meals array
 */
export const ADD_MEAL = "ADD_MEAL";

/*
 * ADD_SYMPTOM:
 * - takes a symptom object as payload with parameters
 * - creates new ID for symptom based on previous last symptom
 * - pushes new symptom to the end of copy of symptoms array
 * - updates symptoms array
 */
export const ADD_SYMPTOM = "ADD_SYMPTOM";

/*
 * UPDATE_USER:
 * - takes object with id and updated values for user parameter(s)
 * - finds user based on ID and updates object
 * - updates object in-place within copy of users array
 * - updates users array
 */
export const UPDATE_USER = "UPDATE_USER";

/*
 * UPDATE_ACTIVITY:
 * - takes object with id and updated values for activity parameter(s)
 * - finds activity based on ID and updates object
 * - updates object in-place within copy of activities array
 * - updates activities array
 */
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";

/*
 * UPDATE_MEAL:
 * - takes object with id and updated values for meal parameter(s)
 * - finds meal based on ID and updates object
 * - updates object in-place within copy of meals array
 * - updates meals array
 */
export const UPDATE_MEAL = "UPDATE_MEAL";

/*
 * REMOVE_ACTIVITY:
 * - takes a string of activity to be removed
 * - creates copy of activities array
 * - filters new copy to only return non-matching (to parameter) activities
 * - updates activities array
 */
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";

/*
 * REMOVE_MEAL:
 * - takes a string of meal to be removed
 * - creates copy of meals array
 * - filters new copy to only return non-matching (to parameter) meals
 * - updates meals array
 */
export const REMOVE_MEAL = "REMOVE_MEAL";
