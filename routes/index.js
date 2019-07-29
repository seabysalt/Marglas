const express = require("express");
const router = express.Router();

const Tracker = require("../models/Tracker");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* POST route => to create a new mood tracking */
router.post("/mood", (req, res, next) => {
  const { energyMood, loveMood, gratefulMood } = req.body;
  console.log("iiiiii", energyMood, loveMood, gratefulMood);
  const user = req.user._id;
  Tracker.create({
    user: user,
    energyMood: energyMood,
    loveMood: loveMood,
    gratefulMood: gratefulMood
  })
    .then(newTracker => {
      newTracker.username = req.user.username;
      //object assign => to use the username despite its not in my tracker model
      //console.log("nnnnn", newTracker);
      res.json(newTracker);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/tracker", (req, res) => {
  Tracker.find()
    .then(trackers => {
      res.json(trackers);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
