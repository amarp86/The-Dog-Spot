import { getDogs } from "../../services/dogs.js";
import { useEffect, useState } from "react";
import Dog from "../../components/Dog/Dog";

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
        <Dog key={index} dog={dog} />
      ))}
    </div>
  );
}

export default Dogs;
