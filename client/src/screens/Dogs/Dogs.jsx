import { getDogs } from "../../services/dogs.js";
import { useEffect, useState } from "react";
import Dog from "../../components/Dog/Dog";
import "./Dogs.css";
import { AZ, ZA, } from "../../utils/sort"
import Sort from "../../components/Sort/Sort.jsx";


function Dogs(props) {
  const [allDogs, setAllDogs] = useState([]);
  const [search, setSearch] = useState("");
  const [queriedDogs, setQueriedDogs] = useState([]);
  const [sortType, setSortType] = useState([])


  useEffect(() => {
    const fetchDogs = async () => {
      const dogs = await getDogs();
      setAllDogs(dogs);
      setQueriedDogs(dogs)
    };
    fetchDogs();
  }, []);

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "null":
        setQueriedDogs(queriedDogs)
        break
      case "name-ascending":
        setQueriedDogs(AZ(queriedDogs))
        break
      case "name-descending":
        setQueriedDogs(ZA(queriedDogs))
        break
      default:
        break
    }
  }
  const handleSubmit = event => {
    event.preventDefault()
    const newQueriedDogs= allDogs.filter(dog => dog.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedDogs(newQueriedDogs, () => handleSort(sortType))
  }
  

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
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
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
