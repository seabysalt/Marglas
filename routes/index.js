const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Question = require("../models/Question");
const Answer = require("../models/Answer");

const Tracker = require("../models/Tracker");

router.get("/question/pending", (req, res, next) => {
  User.findById(req.user._id)
    .populate("pending")
    .then(user => {
      res.json(user.pending);
    });
});

router.post("/question/pending", (req, res, next) => {
  // create var with id of current pending question
  let id = req.body._question;
  Question.aggregate([
    { $match: { _id: { $ne: id } } },
    { $sample: { size: 1 } }
  ]).then(questions => {
    let newId = questions[0]._id;
    User.findByIdAndUpdate(req.user._id, {
      $pull: { pending: id }
    }).then(() => {
      User.findByIdAndUpdate(req.user._id, {
        $push: { pending: newId }
      }).then(response => {
        res.json();
      });
    });
  });
  //delete question id from pending

  // push a new question into pending
  //return new pending array and call it in QuestionPopup
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
      newTracker.username = req.user.username;
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

router.post("/answer", (req, res, next) => {
  const { _user, _question, category, answer } = req.body;
  console.log(req.body);
  Answer.create({ _user, _question, category, answer }).then(data => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
