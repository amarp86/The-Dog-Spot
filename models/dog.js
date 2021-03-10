const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Dog = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    images: [],
    location: { type: String, required: true },
    description: { type: String, required: true },
    isAdopted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dogs", Dog);
