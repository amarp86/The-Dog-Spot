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
