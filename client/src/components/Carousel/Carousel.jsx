import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getAdoptedDogs } from "../../services/dogs";
import { useEffect, useState } from "react";
const Carousel = (props) => {
  const [adoptedDogs, setAdoptedDogs] = useState([]);

<<<<<<< HEAD


const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  
  const items = [
    <div className="item" data-value="1">
      1
    </div>,
    <div className="item" data-value="2">
      2
    </div>,
    <div className="item" data-value="3">
      3
    </div>,
    <div className="item" data-value="4">
      4
    </div>,
    <div className="item" data-value="5">
      5
    </div>,
  ];
  return (
    <div>
       <AliceCarousel mouseTracking items={items} responsive={responsive} />
=======
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
      <img src={dog.images} alt="dog" />
    </div>
  ));

  return (
    <div>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
>>>>>>> fa60a32471da7948fc777d2d663c07ecb8abc4c7
    </div>
  );
};

export default Carousel;
