const db = require("../db/connection");
const Dog = require("../models/dog");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const dogs = [
    {
      name: "Amarion",
      age: 34,
      breed: "huskie",
      images: [
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
