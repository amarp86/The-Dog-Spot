import { getDogs } from "../../services/dogs.js";
import { useEffect, useState } from "react";
import Dog from "../../components/Dog/Dog";
import "./Dogs.css";

function Dogs(props) {
  const [allDogs, setAllDogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDogs = async () => {
      const dogs = await getDogs();
      setAllDogs(dogs);
    };
    fetchDogs();
  }, []);

  const filteredSearch = allDogs.filter(
    (dog) =>
      dog.breed.toLowerCase().includes(search.toLowerCase()) ||
      dog.description.toLowerCase().includes(search.toLowerCase()) ||
      dog.location.toLowerCase().includes(search.toLowerCase()) ||
      dog.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="entire-area">
      <input
        value={search}
        placeholder="Search by Breed, Location, Description, or Name"
        className="search-input"
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="all-dogs-area">
        {filteredSearch.map((dog, index) => (
          <div key={index} className="each-dog">
            <Dog key={index} dog={dog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dogs;
