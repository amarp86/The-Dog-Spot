import React from "react";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Container.css";

function Container(props) {
  const element = <FontAwesomeIcon icon={faDog} size="6x" />;
  const donate = <FontAwesomeIcon icon={faDonate} size="6x" />;
  return (
    <div className="make-a-difference">
      <div className="title">You can make a difference</div>
      <div className="home-links">
        <div className="container-link">
          <Link to="/dogs">
            <div className="adopt">Adopt</div>

            <div className="dog-icon">{element}</div>
          </Link>
        </div>
        <div className="container-link">
          <Link to="/donate">
            <div className="adopt"> Donate</div>

            <div className="donate-icon">{donate}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Container;
