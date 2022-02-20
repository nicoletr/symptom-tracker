const mongoose = require("mongoose");

const { Schema } = mongoose;

const symptomSchema = new Schema({
  symptomType: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  painLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  mood: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  meals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Meal",
    },
  ],
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
