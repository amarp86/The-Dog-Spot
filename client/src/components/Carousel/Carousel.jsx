import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getAdoptedDogs } from "../../services/dogs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Carousel = (props) => {
  const [adoptedDogs, setAdoptedDogs] = useState([]);

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
  let items = adoptedDogs.map((dog, index) => (
    <div className="item" data-value={`${index}`}>
      <Link to={`/dogs/${dog._id}`}>
        <img src={dog.images} alt="dog" />
      </Link>
    </div>
  ));

  return (
    <div>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
};

export default Carousel;
