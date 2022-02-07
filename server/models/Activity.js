const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    activityType: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
    },
    intensity: {
      type: Number,
    },
    date: {
      type: String,
      get: formatDate,
    },
    createdAt: {
      type: Date,
      default: Date.now("MMMM Do YYYY, h:mm a"),
      get: formatDate,
    },
    symptoms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Symptom",
      },
    ],
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
