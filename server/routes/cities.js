const express = require("express");
const City = require("../models/City");
const router = express.Router();

// Route to get all cities
router.get("/", (req, res, next) => {
  City.find()
    .then(city => {
      res.json(city);
    })
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  City.find()
    .then(city => {
      res.json(city);
    })
    .catch(err => next(err));
});

module.exports = router;
