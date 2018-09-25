const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");
const nodemailer = require("nodemailer");
const Request = require("../models/Request");

router.post("/", isLoggedIn, (req, res, next) => {
  let fromEmail = req.user.email;
  let { to, subject, message } = req.body;
  let requestId = req.body.requestId;

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
      from: `Souvenirs platform - <${fromEmail}>`,
      to: to,
      subject: subject,
      text: message
    })
    .then(info => {
      Request.findByIdAndUpdate(requestId, { taken: true }, { new: true }).then(
        updated => {
          res.json({
            success: true,
            message: `Email successfully sent to ${to}`,
            updated
          });
        }
      );
    })
    .catch(error => console.log(error));
});

module.exports = router;
