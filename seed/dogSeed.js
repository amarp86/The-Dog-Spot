const db = require("../db/connection");
const Dog = require("../models/dog");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const dogs = [
    {
      name: "Amarion",
      age: 34,
      breed: "husky",
      images: [
        "https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      description: "fluffy, and does not listen to the rules",
      location: "Somerset, NJ",
      isAdopted: false,
    },
    {
      name: "Jason",
      age: 24,
      breed: "pug",
      images: [
        "https://images.unsplash.com/photo-1529927066849-79b791a69825?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80",
      ],
      description: "Small, Agile, and will bite your ankles",
      location: "New York City, NY",
      isAdopted: false,
    },
    {
      name: "Hanna",
      age: 27,
      breed: "Bernese Mountain Dog",
      images: [
        "https://images.unsplash.com/photo-1507671044455-bd4511e3e5c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      description: "Big, Rugged, and lovable",
      location: "Chicago, IL",
      isAdopted: false,
    },
  ];

  await Dog.insertMany(dogs);
  console.log("Created dogs!");
};
const run = async () => {
  await main();
  db.close();
};

run();
