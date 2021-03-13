import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'


const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-dog">
      Add Dog
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/dogs">
      Dogs
    </NavLink>
    <NavLink className="link" to="/about">
      About Us{" "}
    </NavLink>
    <NavLink className="link" to="/donate">
      Donate
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  const paw = <FontAwesomeIcon className="paw" icon={faPaw} size="S" />
  const [open, setOpen] = useState(false);
  const burgerToggle = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          THE DOG SPOT
          {paw}
        </NavLink>
        <div className="links">
          {user && (
            <div className="link-welcome">
              Welcome, {user.name.toUpperCase()}
            </div>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        <Burger user={user} open={open} burgerToggle={burgerToggle} />
       
      </div>
     
     
    </nav>
  );
};

export default Nav;
