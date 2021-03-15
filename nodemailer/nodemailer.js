const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(email) {
  console.log("hello");
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
      <h1>Thank you for signing-up at The Dog Spot!"</h1>
      <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" alt="logo"/>
      <h2>Sincerely, Hanna, Jason, Amar </h2>

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
