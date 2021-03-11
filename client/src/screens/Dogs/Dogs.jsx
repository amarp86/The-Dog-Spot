import { getDogs } from "../../services/dogs.js";
import { useEffect, useState } from "react";
import Dog from "../../components/Dog/Dog";
import "./Dogs.css";

function Dogs(props) {
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const dogs = await getDogs();
      setAllDogs(dogs);
    };
    fetchDogs();
  }, []);
  return (
    <div className="all-dogs-area">
      {allDogs.map((dog, index) => (
        <div className="each-dog">
          <Dog key={index} dog={dog} />
        </div>
      ))}
    </div>
  );
}

export default Dogs;
