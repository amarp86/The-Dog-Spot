import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Redirect } from "react-router-dom";
import { getDog, updateDog } from "../../services/dogs";
import "./DogEdit.css";

const DogEdit = (props) => {
  const [allBreeds, setAllBreeds] = useState([]);
  const [dog, setDog] = useState({
    name: "",
    age: "",
    images: "",
    location: "",
    description: "",
    breed: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const params = useParams();
  let { id } = useParams();

  useEffect(() => {
    const fetchDog = async () => {
      const dog = await getDog(id);
      setDog(dog);
    };
    const fetchBreed = async () => {
      const resp = await axios.get(
        `https://api-dog-breeds.herokuapp.com/api/dogs`
      );
      setAllBreeds(resp.data);
    };
    fetchBreed();
    fetchDog();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDog({
      ...dog,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let id = params.id;
    const updated = await updateDog(id, dog);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/dogs/${params.id}`} />;
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
    <div className="dog-edit">
      <div className="image-container">
        <img className="edit-dog-image" src={dog.images} alt={dog.name} />
        <form onSubmit={handleSubmit}>
          <textarea
            className="edit-input-image-link"
            placeholder="Image Link"
            rows={1}
            cols={170}
            value={dog.images}
            name="images"
            required
            onChange={handleChange}
          />
        </form>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
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
          cols={78}
          placeholder="Description"
          value={dog.description}
          name="description"
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
        <input
          className="input-location"
          type="text"
          placeholder="location of dog"
          value={dog.location}
          name="location"
          required
          onChange={handleChange}
        />
        <button type="submit" className="save-button">
          Fetch
        </button>
      </form>
    </div>
  );
};

export default DogEdit;
