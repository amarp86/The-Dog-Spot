const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
