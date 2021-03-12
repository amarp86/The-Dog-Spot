import { Link } from "react-router-dom";
import "./Dog.css";

function Dog(props) {
  const { _id, images, name } = props.dog;
  return (
    <div className="entire-dog-container">
      <Link className="dog" to={`/dogs/${_id}`}>
        <img className="dog-image" src={images} alt={name} />
        <div className="dog-name">{name}</div>
      </Link>
    </div>
  );
}

export default Dog;
