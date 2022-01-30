const mongoose = require("mongoose");

const { Schema } = mongoose;
// const Symptom = require("./Symptom");

const mealSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    mealType: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    portionSize: {
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

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
