const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");
const nodemailer = require("nodemailer");

router.post("/", isLoggedIn, (req, res, next) => {
  let emailFrom = req.user.email;
  let requestId = req.body.requestId;
  let subject = req.body.subject;
  let message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  transporter
    .sendMail({
      from: req.user.email,
      to: req.body.requestID,
      subject: req.body.subject,
      text: req.body.message,
      html: `<b>${message}</b>` // two message texts?
    })
    .then(info => res.json({ email, subject, message, info }))
    .catch(error => console.log(error));
});

module.exports = router;
