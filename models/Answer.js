const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  // ObjectId: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: { type: Date, required: true, default: Date.now },
  category: { type: String },
  _question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  answer: { type: String, maxlength: 50 }
});

const Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;
