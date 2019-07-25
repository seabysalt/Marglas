const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  // ObjectId: String,
  userId: String,
  username: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  category: { type: String, enum: ["energy", "grateful", "loved"] },
  question: { type: String },
  answer: { type: String, maxlength: 50 }
});

const Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;
