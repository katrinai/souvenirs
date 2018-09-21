const express = require("express");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "this is the landing page"
  });
});

router.get("/requests", isLoggedIn, (req, res, next) => {
  Request.find({ _owner: req.user._id }).then(requests => {
    res.json({ requests, user: req.user });
  });
});

module.exports = router;
