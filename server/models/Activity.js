const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;
const Symptom = require("./Symptom");
const Rating = require("./Rating");

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 20,
    },
    activityType: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      min: 0,
    },
    intensity: {
      type: String,
    },
    date: {
      type: Date,
      get: formatDate,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate,
    },
    symptoms: [Symptom.schema],
    rating: Rating.schema,
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//Function to format date
function formatDate(date) {
  formattedDate = moment(date).format("MMMM Do YYYY, h:mm a");
  return formattedDate;
}

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
