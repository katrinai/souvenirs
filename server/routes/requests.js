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
    _owner: req.user._id
    //_city: req.city._id
  })
    .then(newRequest => {
      res.json(newRequest);
    })
    .catch(err => next(err));
});

// Route to edit a request
router.put("/:requestId", (req, res, next) => {
  // let { title, text, endDate, _owner, _city } = req.body;
  Request.findByIdAndUpdate(
    req.params.requestId,
    {
      title: req.body.title,
      text: req.body.text,
      endDate: req.body.endDate,
      _owner: req.user._id
      //_city: req.city._id
    },
    { new: true }
  )
    .then(newRequest => {
      res.json(newRequest);
    })
    .catch(err => next(err));
});

// Route to delete a request
router.delete("/:requestId", (req, res, next) => {
  // let { title, text, endDate, _owner, _city } = req.body;
  Request.findByIdAndRemove(req.params.requestId, {
    title: req.body.title,
    text: req.body.text,
    endDate: req.body.endDate,
    _owner: req.user._id
    //_city: req.city._id
  })
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
