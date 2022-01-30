const mongoose = require("mongoose");

const { Schema } = mongoose;

const symptomSchema = new Schema({
  symptomType: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  rating: {
    painLevel: {
      type: Int,
      required: true,
      min: 1,
      max: 10,
    },
    mood: {
      type: String,
      required: true,
    },
  },
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
