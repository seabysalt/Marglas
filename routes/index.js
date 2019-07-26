const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Question = require("../models/Question");

const Tracker = require("../models/Tracker");

router.get("/question/pending", (req, res, next) => {
  console.log(req.user);
  User.findById(req.user._id)
    .populate("pending")
    .then(user => {
      res.json(user.pending);
    });
});

/* POST route => to create a new mood tracking */
router.post("/mood", (req, res, next) => {
  const { energyMood, loveMood, gratefulMood } = req.body;
  console.log("iiiiii", energyMood, loveMood, gratefulMood);
  const username = req.user.username;
  Tracker.create({
    username: username,
    energyMood: energyMood,
    loveMood: loveMood,
    gratefulMood: gratefulMood
  })
    .then(newTracker => {
      console.log("nnnnn", newTracker);
      res.json(newTracker);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
