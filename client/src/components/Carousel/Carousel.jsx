import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getAdoptedDogs } from "../../services/dogs";
import { useEffect, useState } from "react";
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
      <img src={dog.images} alt="dog" />
    </div>
  ));
  // const items = [
  //   <div className="item" data-value="1">
  //     <img
  //       src="https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  //       alt="dog"
  //     />
  //   </div>,
  //   <div className="item" data-value="2">
  //     <img
  //       src="https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  //       alt="dog"
  //     />
  //   </div>,
  //   <div className="item" data-value="3">
  //     <img
  //       src="https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  //       alt="dog"
  //     />
  //   </div>,
  //   <div className="item" data-value="4">
  //     <img
  //       src="https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  //       alt="dog"
  //     />
  //   </div>,
  //   <div className="item" data-value="5">
  //     <img
  //       src="https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  //       alt="dog"
  //     />
  //   </div>,
  // ];

  return (
    <div>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
};

export default Carousel;
