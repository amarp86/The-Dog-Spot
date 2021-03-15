const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "thedogspot2021@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "thedogspot2021@gmail.com",
    to: `${email}`,
    subject: "Welcome to The Dog Spot",
    text: "Thank You for Signing Up at The Dog Spot!",
    html: `<html>
    <head>
      <meta charset="utf-8">
      <style amp4email-boilerplate>body{visibility:hidden}</style>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
    </head>
    <body>
      <h1>Thank you for signing-up at The Dog Spot!</h1>
      <img src="https://i.imgur.com/yqaZlST.png" alt="logo" height=60% width=60%/>
      <h2>Sincerely,<br> Hanna, Jason, Amar </h2>

    </body>
  </html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  sendEmail,
};
