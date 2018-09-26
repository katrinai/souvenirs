const express = require("express");
const Request = require("../models/Request");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

// Route to get all requests
router.get("/", isLoggedIn, (req, res, next) => {
  Request.find()
    .then(request => {
      res.json(request);
      console.log("REQUEST", request);
    })
    .catch(err => next(err));
});

// Route to add a new request
router.post("/", isLoggedIn, (req, res, next) => {
  Request.create({
    title: req.body.title,
    text: req.body.text,
    endDate: req.body.endDate,
    _owner: req.user._id,
    _city: req.body._city
  })
    .then(newRequest => {
      res.json(newRequest);
    })
    .catch(err => next(err));
});

// Route to get details from one request
router.get("/:id", isLoggedIn, (req, res, next) => {
  Request.findById(req.params.id)
    .populate("_city")
    .populate("_owner")
    .then(requestDetails => {
      console.log(
        "details -->",
        requestDetails._owner.username,
        requestDetails._city.name
      );
      res.json({
        details: requestDetails,
        username: requestDetails._owner.username,
        name: requestDetails._city.name
      });
    })
    .catch(err => next(err));
});

// Route to delete a request
router.delete("/:id", isLoggedIn, (req, res, next) => {
  Request.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        success: true
      });
    })
    .catch(err => {
      return {
        success: false,
        error: err
      };
    });
});

module.exports = router;
