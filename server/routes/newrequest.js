const express = require("express");
const Request = require("../models/Request");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

// Route to add a new request
router.post("/", isLoggedIn, (req, res, next) => {
  Request.create({
    title: req.body.title,
    text: req.body.text,
    endDate: req.body.endDate,
    _owner: req.user._id
    //_city: req.city._id
  })
    .then(newRequest => {
      res.json(newRequest);
    })
    .catch(err => next(err));
});

module.exports = router;
