import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getDog, unAdoptDog, adoptDog } from "../../services/dogs.js";
import "./DogDetail.css";

import axios from "axios";

function DogDetail(props) {
  const [dog, setDog] = useState([]);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const [breedInfo, setBreedInfo] = useState([]);

  const params = useParams();
  const [isUpdated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchDog = async () => {
      const dog = await getDog(id);
      setDog(dog);
      const resp = await axios.get(
        `https://api-dog-breeds.herokuapp.com/api/search?q=${dog.breed}`
      );

      let matchedDog = resp.data.find((apiDog) =>
        apiDog.breedName.includes(dog.breed)
      );

      setBreedInfo(matchedDog.description);
      setIsLoaded(true);
    };
    fetchDog();
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

  const handleSignIn = () => {
    history.push("/sign-in");
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
        <div className="external-dog-temperment">{breedInfo}</div>
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
        <div className="external-dog-temperment">{breedInfo}</div>
        <button className="sign-in-button" onClick={handleSignIn}>
          Sign-In
        </button>
      </div>
    );
  }
}

export default DogDetail;
