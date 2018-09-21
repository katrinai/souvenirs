const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/signup", (req, res, next) => {
  const { username, password, firstname, lastname, email } = req.body;
  if (!username || !password) {
    res.status(401).json({ message: "Please indicate username and password" });
    return;
  }
  User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res
          .status(401)
          .json({ message: "Sorry, but the username already exists" });
        return;
      }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = new User({
        username,
        password: hashPass,
        firstname,
        lastname,
        email
      });
      return newUser.save();
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong..." });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Something went wrong..." });
        return;
      }

      // We are now logged in (notice req.user)
      res.json(req.user);
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "You are out!" });
});

module.exports = router;
