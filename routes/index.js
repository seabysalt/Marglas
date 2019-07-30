const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Question = require("../models/Question");
const Answer = require("../models/Answer");
const Tracker = require("../models/Tracker");

router.get("/question/pending", (req, res, next) => {
  User.findById(req.user._id)
    .populate("pending.id")
    .then(user => {
      res.json(user.pending);
    });
});

router.post("/question/pending", (req, res, next) => {
  // create var with id of current pending question
  let id = req.body._question;
  console.log(id);
  Question.aggregate([
    { $match: { _id: { $ne: id } } },
    { $sample: { size: 1 } }
  ]).then(questions => {
    let newId = questions[0]._id;
    let date = new Date(Date.now() + 1000 * 3600 * 24);
    //date for the next day
    User.findById(req.user._id).then(user => {
      console.log(user.pending);
      let filteredArray = user.pending.filter(question => {
        if (question._id != id) return true;
      });
      filteredArray.push({ id: newId, date });

      User.findByIdAndUpdate(req.user._id, {
        $set: { pending: filteredArray } //and date
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
  const user = req.user._id;
  Tracker.create({
    user: user,
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
  Answer.create({ _user, category, _question, answer }).then(data => {
    res.json(data);
  });
});

// boardCard/Happiness
router.get("/boardCard/:category", (req, res) => {
  console.log("bla" + req.params.category, req.user._id);
  Answer.find({ category: req.params.category, _user: req.user._id })
    .then(boardCard => {
      console.log("here");
      console.log(boardCard);
      res.json(boardCard);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
