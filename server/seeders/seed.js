const db = require("../config/connection");
const { User, Activity, Meal, Symptom } = require("../models");

const userData = require("./userData.json");
const activityData = require("./activityData.json");
const mealData = require("./mealData.json");
const symptomData = require("./symptomData.json");

db.once("open", async () => {
  await User.deleteMany();
  const users = await User.insertMany(userData);

  await Activity.deleteMany();
  const activities = await Activity.insertMany(activityData);

  await Meal.deleteMany();
  const meals = await Meal.insertMany(mealData);

  await Symptom.deleteMany();
  const symptoms = await Symptom.insertMany(symptomData);

  console.log("users seeded", users);
  console.log("activities seeded", activities);
  console.log("meals seeded", meals);
  console.log("symptoms seeded", symptoms);

  process.exit();
});
