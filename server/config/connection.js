const mongoose = require("mongoose");

mongoose.connect(
  (process.env.MONGODB_URI =
    "mongodb+srv://nicoletr:Blackjack138@cluster0.0m49i.mongodb.net/symptom-tracker?retryWrites=true&w=majority" ||
    "mongodb://localhost/symptom-tracker"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
