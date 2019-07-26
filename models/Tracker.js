const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
  id: String,
  date: { type: Date, required: true, default: Date.now },
  username: { type: String, required: true },
  energyMood: Number,
  loveMood: Number,
  gratefulMood: Number
});

const Tracker = mongoose.model("Tracker", trackerSchema);
module.exports = Tracker;
