const express = require("express");
const Request = require("../models/Request");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");

// Route to get all requests
router.get("/", isLoggedIn, (req, res, next) => {
  Request.find()
    .then(request => {
      res.json(request);
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

// Route to edit a request
router.put("/:requestId", isLoggedIn, (req, res, next) => {
  Request.findById(req.params.requestId).then(request => {
    if (request._owner.toString() === req.user._id.toString()) {
      request.title = req.body.title;
      request.text = req.body.text;
      request.endDate = req.body.endDate;
      request._owner = req.user._id;
      //_city: req.city._id
      request
        .save()
        .then(updatedRequest => {
          res.json({
            success: true,
            updatedRequest
          });
        })
        .catch(err => next(err));
    } else {
      res.json({
        status: 403,
        message: "Unauthorized"
      });
    }
  });
});

// Route to delete a request
router.delete("/:requestId", isLoggedIn, (req, res, next) => {
  Request.findById(req.params.requestId).then(request => {
    if (request._owner.toString() === req.user._id.toString()) {
      request
        .delete()
        .then(deletedRequest => {
          res.json({
            success: true,
            deletedRequest
          });
        })
        .catch(err => next(err));
    } else {
      res.json({
        status: 403,
        message: "Unauthorized"
      });
    }
  });
});

module.exports = router;
