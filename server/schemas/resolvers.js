const { AuthenticationError } = require("apollo-server-express");
const { User, Activity, Meal, Symptom, Rating } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("activities").populate("meals");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("activities")
        .populate("meals");
    },
    activities: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Activity.find(params).sort({ createdAt: -1 });
    },
    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: activityId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("activities")
          .populate("meals");
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
    addActivity: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const activity = new Activity(args);

        await User.findByIdAndUpdate(context.user._id, {
          $push: { activities: activity },
        });

        return activity;
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
    updateActivity: async (parent, { _id }, context) => {
      if (context.user) {
        return await Activity.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
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
