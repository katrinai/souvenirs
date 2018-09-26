const express = require("express");
const User = require("../models/User");
const Request = require("../models/Request");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

//view user profile only of logged in user
router.get("/", isLoggedIn, (req, res, next) => {
  User.findById(req.user.id).then(userFromDb => {
    Request.find({ _owner: req.user._id })
      .then(requestsFromDb => {
        res.json({ user: userFromDb, requests: requestsFromDb });
      })
      .catch(err => next(err));
  });
});

module.exports = router;
