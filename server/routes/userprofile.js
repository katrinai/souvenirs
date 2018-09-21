const express = require("express");
const Request = require("../models/User");
const router = express.Router();

router.get("/", (req, res, next) => {
  User.find().then(usersFromDb => {
    res.render("users", {
      users: usersFromDb
    });
  });
});

module.exports = router;
