const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
  userId: String,
  date: { type: Date, required: true, default: Date.now },
  username: { type: String, required: true },
  energyLevel: Number,
  loveLevel: Number,
  gratefulLevel: Number
});

const Tracker = mongoose.model("Tracker", trackerSchema);
module.exports = Tracker;
