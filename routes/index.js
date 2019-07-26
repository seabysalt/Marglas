const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Question = require("../models/Question");

router.get("/question/pending", (req, res, next) => {
  console.log(req.user);
  User.findById(req.user._id)
    .populate("pending")
    .then(user => {
      res.json(user.pending);
    });
});
module.exports = router;
