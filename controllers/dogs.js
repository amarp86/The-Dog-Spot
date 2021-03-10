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

const getAdoptedDogs = async (req, res) => {
  try {
    const dogs = await Dog.find({ isAdopted: true });
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

const adoptDog = async (req, res) => {
  const { id } = req.params;
  const isAdopted = {
    isAdopted: true,
  };

  await Dog.findByIdAndUpdate(id, isAdopted, { new: true }, (error, dog) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!dog) {
      return res.status(404).json({ message: "Dog not found!" });
    }
    res.status(200).json(dog);
  });
};

const unAdopt = async (req, res) => {
  const { id } = req.params;
  const isAdopted = {
    isAdopted: false,
  };

  await Dog.findByIdAndUpdate(id, isAdopted, { new: true }, (error, dog) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!dog) {
      return res.status(404).json({ message: "Dog not found!" });
    }
    res.status(200).json(dog);
  });
};
module.exports = {
  createDog,
  getDogs,
  getDog,
  updateDog,
  adoptDog,
  unAdopt,
};
