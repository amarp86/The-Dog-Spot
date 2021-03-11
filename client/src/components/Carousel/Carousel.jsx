import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getAdoptedDogs } from "../../services/dogs";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Carousel.css";

const Carousel = (props) => {
  const [adoptedDogs, setAdoptedDogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchDogs = async () => {
      const dogs = await getAdoptedDogs();
      setAdoptedDogs(dogs);
    };
    fetchDogs();
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const handleClick = (id) => {
    history.push(`/dogs/${id}`);
  };

  let items = adoptedDogs.map((dog, index) => (
    <div className="item" data-value={`${index}`}>
      <img
        className="item-image"
        src={dog.images}
        alt="dog"
        onClick={() => handleClick(dog._id)}
      />
    </div>
  ));

  return (
    <div>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
};

export default Carousel;
