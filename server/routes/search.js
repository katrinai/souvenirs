const express = require("express");
const Request = require("../models/Request");
const City = require("../models/City");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

// Route to get the search page with all requests (the requests will be filtered by the search)
router.get("/", isLoggedIn, (req, res, next) => {
  console.log("req.query.city", req.query.city);

  // If the search has less than 2 characters, take all the requests
  if (req.query.city.length <= 2) {
    Request.find({
      taken: false
    })
      .populate("_city")
      .then(requests => {
        res.json(requests);
      });
    return;
  }

  let re = new RegExp(req.query.city, "i");
  City.find({ name: re })
    .then(cities => {
      console.log("cities", cities);

      if (!cities) {
        res.json([]);
      } else {
        Request.find({
          $and: [
            {
              _city: {
                $in: cities.map(city => city._id)
              }
            },
            { taken: false }
          ]
        })
          .populate("_city")
          .then(requests => {
            res.json(requests);
          });
      }
    })
    .catch(err => next(err));
});

module.exports = router;
