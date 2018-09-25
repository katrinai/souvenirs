const express = require("express");
const City = require("../models/City");
const router = express.Router();

// Route to get all cities
router.get("/", (req, res, next) => {
  City.find()
    .limit(1000)
    .then(city => {
      res.json(
        city.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
      );
    })
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  City.create({
    name: req.body.name,
    country: req.body.country
  })
    .then(city => {
      res.json(city);
    })
    .catch(err => next(err));
});

module.exports = router;
