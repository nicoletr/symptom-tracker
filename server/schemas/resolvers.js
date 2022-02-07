const { AuthenticationError } = require("apollo-server-express");
const { User, Activity, Meal, Symptom } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .populate("activities")
        .populate("meals")
        .populate("symptoms");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("activities")
        .populate("meals")
        .populate("symptoms");
    },
    activities: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Activity.find(params).sort({ createdAt: -1 });
    },
    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: activityId }).populate("symptoms");
    },
    meals: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Meal.find(params).sort({ createdAt: -1 });
    },
    meal: async (parent, { mealId }) => {
      return Meal.findOne({ _id: mealId }).populate("symptoms");
    },
    symptoms: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Symptom.find(params).sort({ createdAt: -1 });
    },
    symptom: async (parent, { symptomId }) => {
      return Symptom.findOne({ _id: symptomId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("activities")
          .populate("meals")
          .populate("symptoms");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addActivity: async (
      parent,
      { name, activityType, duration, intensity, date },
      context
    ) => {
      if (context.user) {
        const activity = await Activity.create({
          name,
          activityType,
          duration,
          intensity,
          date,
          activityAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { activities: activity._id } }
        );

        return activity;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addMeal: async (
      parent,
      { name, mealType, ingredients, portionSize, date },
      context
    ) => {
      if (context.user) {
        const meal = await Meal.create({
          name,
          mealType,
          ingredients,
          portionSize,
          date,
          activityAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { meals: meal._id } }
        );

        return meal;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addSymptom: async (parent, { symptomType, painLevel, mood }, context) => {
      if (context.user) {
        const meal = await Symptom.create({
          symptomType,
          painLevel,
          mood,
          symptomAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { meals: meal._id } }
        );

        return meal;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateActivity: async (parent, { activityId, args }, context) => {
      if (context.user) {
        return await Activity.findByIdAndUpdate(_id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateMeal: async (parent, { mealId, args }, context) => {
      if (context.user) {
        return await Meal.findByIdAndUpdate(_id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeActivity: async (parent, { activityId }, context) => {
      if (context.user) {
        const activity = await Activity.findOneAndDelete({
          _id: activityId,
          activityAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { activities: activity._id } }
        );

        return activity;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeMeal: async (parent, { mealId }, context) => {
      if (context.user) {
        const meal = await Meal.findOneAndDelete({
          _id: mealId,
          mealAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { meals: meal._id } }
        );

        return meal;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
