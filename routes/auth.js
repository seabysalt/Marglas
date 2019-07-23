const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

const User = require("../models/User");

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  if (!password || !username) {
    return res.status(400).json({ message: "Both fields are required" });
  } else if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password needs to be 8 char. min" });
  }

  User.findOne({ username: username })
    .then(user => {
      if (user) {
        return res.status(409).json({ message: "Username is already taken" });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({
        username,
        password: hash
      }).then(newUser => {
        req.login(newUser, err => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error while attempting to login" });
          }

          res.status(200).json(newUser);
        });
      });
    })
    .catch(err => {
      res.status(500).json({ message: "Error at signup" });
    });
});

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    } else if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }

      return res.status(200).json(user);
    });
  })(req, res);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "User was successfully logged out" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
