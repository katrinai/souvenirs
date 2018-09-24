const express = require("express");
const Request = require("../models/Request");
const City = require("../models/City");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

// Route to get the search page with all requests (the requests will be filtered by the search)
router.get("/", isLoggedIn, (req, res, next) => {
  console.log("req.query.city", req.query.city);
  let re = new RegExp(req.query.city, "i");
  City.findOne({ name: re })
    .then(city => {
      Request.find({ _city: city._id }).then(requests => {
        res.json(requests);
      });
    })
    .catch(err => next(err));
});

module.exports = router;
