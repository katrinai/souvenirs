const express = require("express");
const User = require("../models/User");
const Request = require("../models/Request");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

//view user profile only of logged in user
router.get("/", isLoggedIn, (req, res, next) => {
  User.findById(req.params.id).then(usersFromDb => {
    res.render("users", {
      users: usersFromDb
    });
  });
});

//view list of requests only of logged in user

// router.get("/", isLoggedIn, (req, res, next) => {
//   Request.find()
//     .then(request => {
//       res.json(request);
//     })
//     .catch(err => next(err));
// });

//button to add/ create a new request

// router.post("/", isLoggedIn, (req, res, next) => {
//   Request.create({
//     title: req.body.title,
//     text: req.body.text,
//     endDate: req.body.endDate,
//     _owner: req.user._id
//     //_city: req.city._id
//   })
//     .then(newRequest => {
//       res.json(newRequest);
//     })
//     .catch(err => next(err));
// });

module.exports = router;
