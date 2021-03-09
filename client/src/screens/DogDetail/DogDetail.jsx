import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDog } from "../../services/dogs.js";

function DogDetail(props) {
  const [dog, setDog] = useState([]);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdopted, setIsAdopted] = useState(false);
  let status = "";

  useEffect(() => {
    const fetchDogs = async () => {
      const dog = await getDog(id);
      setDog(dog);
      setIsLoaded(true);
    };
    fetchDogs();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  if (isAdopted === false) {
    status = `${dog.name} is looking for a forever home`;
  } else {
    status = `${dog.name} has a forever home`;
  }
  const handleAdopt = (e) => {
    e.preventDefault();
    setIsAdopted(!isAdopted);
  };

  return (
    <div className="dog-detail-area">
      <img src={dog.images} alt="dog" />
      <div className="dog-name">{dog.name}</div>
      <div className="dog-age">{dog.age}</div>
      <div className="dog-location">{dog.location}</div>
      <div className="dog-description">{dog.description}</div>
      <div className="adopted-status">{status}</div>
      <button onClick={handleAdopt}>Adopt Me</button>
      <button>Edit Me</button>
    </div>
  );
}

export default DogDetail;
