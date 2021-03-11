import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { createDog } from "../../services/dogs";
import axios from "axios";
import "./DogCreate.css";

const DogCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [allBreeds, setAllBreeds] = useState([]);
  const [dog, setDog] = useState({
    name: "",
    description: "",
    images: "",
    location: "",
    age: "",
    breed: "",
  });

  useEffect(() => {
    const fetchDog = async () => {
      const resp = await axios.get(
        `https://api-dog-breeds.herokuapp.com/api/dogs`
      );
      setAllBreeds(resp.data);
    };
    fetchDog();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDog({
      ...dog,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createDog(dog);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/dogs`} />;
  }
  const titleCase = (str) => {
    return str
      .split(" ")
      .map((word) => {
        if (word[0] === "'") {
          return "'" + word[1].toUpperCase() + word.substring(2);
        } else {
          return word[0].toUpperCase() + word.substring(1);
        }
      })
      .join(" ");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        className="input-name"
        placeholder="Name"
        value={dog.name}
        name="name"
        required
        autoFocus
        onChange={handleChange}
      />
      <input
        className="input-age"
        placeholder="age"
        value={dog.age}
        name="age"
        required
        onChange={handleChange}
      />
      <textarea
        className="textarea-description"
        rows={10}
        placeholder="Description"
        value={dog.description}
        name="description"
        required
        onChange={handleChange}
      />
      <input
        className="input-image-link"
        placeholder="Image Link"
        value={dog.images}
        name="images"
        required
        onChange={handleChange}
      />
      <input
        className="input-location"
        placeholder="Dog Location"
        value={dog.location}
        name="location"
        required
        onChange={handleChange}
      />

      <select
        className="breed-select"
        value={dog.breed}
        name="breed"
        required
        onChange={handleChange}
      >
        {allBreeds.map((dog, index) => (
          <option key={index}>{titleCase(dog.breedName)}</option>
        ))}
      </select>

      <button type="submit" className="submit-button">
        Fetch
      </button>
    </form>
  );
};

export default DogCreate;
