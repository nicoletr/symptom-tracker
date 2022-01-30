const mongoose = require("mongoose");

const { Schema } = mongoose;

const symptomSchema = new Schema({});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
