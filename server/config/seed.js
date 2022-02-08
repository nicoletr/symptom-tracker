const db = require("./connection");
const { User, Activity, Meal, Symptom } = require("../models");

db.once("open", async () => {
  await Activity.deleteMany();
  const activities = await Activity.insertMany([
    {
      name: "Morning Run",
      activityType: "Running",
      duration: 30,
      intensity: "5",
      date: 1643808600000,
    },
    {
      name: "Commute to work",
      activityType: "Cycling",
      duration: 45,
      intensity: "8",
      date: 1644051600000,
    },
    {
      name: "Sunday beachwalk",
      activityType: "Walking",
      duration: 90,
      intensity: "2",
      date: 1642531500000,
    },
  ]);

  console.log("activities seeded", activities);

  await Meal.deleteMany();
  const meals = await Meal.insertMany([
    {
      name: "Sunday dinner",
      mealType: "Lasagna",
      ingredients:
        "Red meat, onion, garlic, pasta, tomato sauce, bechamel sauce, herbs",
      portionSize: "Large",
      date: 1643808600000,
    },
    {
      name: "Breakfast smoothie",
      mealType: "Smoothie",
      ingredients:
        "Banana, berries, soy milk, peanut butter, oats, protein powder, water",
      portionSize: "Medium",
      date: 1644051600000,
    },
    {
      name: "Snack",
      mealType: "Potato Crisps",
      ingredients: "Potato, oil, salt",
      portionSize: "Medium",
      date: 1642531500000,
    },
  ]);

  console.log("meals seeded", meals);

  await Symptom.deleteMany();
  const symptoms = await Symptom.insertMany([
    {
      symptomType: "Joint pain",
      painLevel: "5",
      mood: "Bad",
    },
    {
      symptomType: "Bruising",
      painLevel: "9",
      mood: "Fine",
    },
    {
      symptomType: "Constipation",
      painLevel: "3",
      mood: "Fine",
    },
    {
      symptomType: "Fever",
      painLevel: "7",
      mood: "Bad",
    },
    {
      symptomType: "Toothache",
      painLevel: "1",
      mood: "Good",
    },
    {
      symptomType: "Loss of appetite",
      painLevel: "6",
      mood: "Fine",
    },
    {
      symptomType: "Bloating",
      painLevel: "1",
      mood: "Good",
    },
  ]);

  console.log("symptoms seeded", symptoms);

  await User.deleteMany();
  await User.create([
    {
      username: "sdacke0",
      email: "ehammill0@springer.com",
      password: "hjdniYjSwOi",
      activities: [activities[0]._id, activities[2]._id],
      meals: [meals[0]._id],
      symptoms: [symptoms[2]._id, symptoms[5]._id, symptoms[0]._id],
    },
  ]);

  await User.create([
    {
      username: "nicoletr",
      email: "nicole@email.com",
      password: "password",
      activities: [activities[2]._id],
      meals: [meals[0]._id, meals[2]._id],
      symptoms: [symptoms[0]._id],
    },
  ]);

  console.log("users seeded");

  process.exit();
});
