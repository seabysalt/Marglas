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
