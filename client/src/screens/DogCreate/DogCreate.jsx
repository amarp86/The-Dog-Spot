import { useState } from "react";

import { Redirect } from "react-router-dom";
import { createDog } from "../../services/dogs";

const DogCreate = (props) => {
  const [dog, setDog] = useState({
    name: "",
    description: "",
    images: "",
    location: "",
    age: "",
    breed: "",
    isAdopted: "",
  });

  const [isCreated, setCreated] = useState(false);

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
      <input
        className="input-breed"
        placeholder="Dog Breed"
        value={dog.breed}
        name="breed"
        required
        onChange={handleChange}
      />
      <select
        className="input-adopted-status"
        value={dog.isAdopted}
        name="isAdopted"
        required
        onChange={handleChange}
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>

      <button type="submit" className="submit-button">
        Fetch
      </button>
    </form>
  );
};

export default DogCreate;
