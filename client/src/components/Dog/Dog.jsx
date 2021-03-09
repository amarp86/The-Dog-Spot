import { Link } from "react-router-dom";
import "./Dog.css";

function Dog(props) {
  const { _id, images, name, location, description } = props.dog;
  return (
    <>
      <Link className="dog" to={`/dogs/${_id}`}>
        <img className="dog-image" src={images} alt={name} />
        <div className="dog-name">{name}</div>
        {/* <div className="location">{location}</div>
        <div className="description">{description}</div> */}
      </Link>
    </>
  );
}

export default Dog;
