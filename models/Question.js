const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  // ObjectId: String,
  question: String,
  category: { type: String, required: true }
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
