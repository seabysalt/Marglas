const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
  date: { type: Date, required: true, default: Date.now },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  energyMood: Number,
  loveMood: Number,
  gratefulMood: Number
});

const Tracker = mongoose.model("Tracker", trackerSchema);
module.exports = Tracker;
