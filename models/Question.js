const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  // ObjectId: String,
  question: String,
  peerQuestion: String,
  category: { type: String, required: true },
  prompt1: String,
  prompt2: String
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
