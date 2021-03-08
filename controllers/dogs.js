const Dog = require("../models/dog");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDog = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    if (dog) {
      return res.json(dog);
    }
    res.status(404).json({ message: "Dog not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDog = async (req, res) => {
  try {
    const dog = await new Dog(req.body);
    await dog.save();
    res.status(201).json(dog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateDog = async (req, res) => {
  const { id } = req.params;
  await Dog.findByIdAndUpdate(id, req.body, { new: true }, (error, dog) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!dog) {
      return res.status(404).json({ message: "Dog not found!" });
    }
    res.status(200).json(dog);
  });
};

const deleteDog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Dog.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Dog deleted");
    }
    throw new Error("Dog not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDog,
  getDogs,
  getDog,
  updateDog,
  deleteDog,
};
