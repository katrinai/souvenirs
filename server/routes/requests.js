const express = require("express");
const Request = require("../models/Request");
const router = express.Router();

// Route to get all requests
router.get("/", (req, res, next) => {
  Request.find()
    .then(request => {
      res.json(request);
    })
    .catch(err => next(err));
});

// Route to add a request
router.post("/", (req, res, next) => {
  // let { title, text, endDate, _owner, _city } = req.body;
  Request.create({
    title: req.body.title,
    text: req.body.text,
    endDate: req.body.endDate,
    _owner: req.user._id,
    // _city: req.city._id
  })
    .then(newRequest => {
      res.redirect("/userprofile/" + newRequest._id);
    })
    .catch(err => next(err));
});

module.exports = router;
