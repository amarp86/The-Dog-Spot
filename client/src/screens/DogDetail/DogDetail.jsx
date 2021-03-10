import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDog, unAdoptDog, adoptDog } from "../../services/dogs.js";
import "./DogDetail.css";

function DogDetail(props) {
  const [dog, setDog] = useState([]);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  const [isUpdated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      const dog = await getDog(id);
      setDog(dog);
      setIsLoaded(true);
    };
    fetchDogs();
  }, [id, isUpdated]);

  if (!isLoaded) {
    return <h1>Fetching...</h1>;
  }

  const handleAdopt = async (e) => {
    e.preventDefault();

    let id = params.id;

    await adoptDog(id);
    setUpdated(!isUpdated);
  };
  const handleUnAdopt = async (e) => {
    e.preventDefault();
    let id = params.id;

    await unAdoptDog(id);
    setUpdated(!isUpdated);
  };

  if (props.user) {
    return (
      <div className="dog-detail-area">
        <img src={dog.images} alt="dog" />
        <div className="dog-name">{dog.name}</div>
        <div className="dog-age">{dog.age}</div>
        <div className="dog-location">{dog.location}</div>
        <div className="dog-breed">{dog.breed}</div>
        <div className="dog-description">{dog.description}</div>
        <div className="adopted-status">{`Has ${dog.name} been adopted: ${dog.isAdopted}`}</div>
        <button onClick={handleAdopt}>Adopt Me</button>
        <button onClick={handleUnAdopt}>Return Me</button>
        <button>
          <Link className="edit-link" to={`/dogs/${dog._id}/edit`}>
            Edit
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <div className="dog-detail-area">
        <img src={dog.images} alt="dog" />
        <div className="dog-name">{dog.name}</div>
        <div className="dog-age">{dog.age}</div>
        <div className="dog-location">{dog.location}</div>
        <div className="dog-breed">{dog.breed}</div>
        <div className="dog-description">{dog.description}</div>
        <div className="adopted-status">{`Has ${dog.name} been adopted: ${dog.isAdopted}`}</div>
      </div>
    );
  }
}

export default DogDetail;
