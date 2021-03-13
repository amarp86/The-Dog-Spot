import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Side = styled.nav`
  background-color: #f77b00;
   
  .nav-link:hover
  padding-left:0;
  margin: 0 auto;
   
  
  .welcome{
    margin-left:0;
 
   
    

  }

  a.nav-link{
 
    font-size: 30px;
    align-items: center;
    transition: all ease-in-out 250ms;
    padding:10px;
    padding-top:35px;
    margin: 0 auto;
   


  }

.nav-links,
.welcome{
  display: flex;
  flex-direction: column;
margin-top:100px;
  flex-wrap: wrap;
  align-content: center;
  padding-left:0
}

a.nav-link:hover{
  color: white;
}
.links-welcome{
  font-size:30px;
  margin: 0 auto;
  padding-left:0px;
  color:white;
}



  

 
  @media screen and (max-width: 1024px) {
    {
      position: fixed;
      
      height: 100vh;
      
      top: 0;
      left: 0;
      right: 0;
      
      transform: ${({ open }) => (open ? `translateX(0%)` : `translateX(100%)`)};
      transition: 0.3s ease-in-out;
    }
   
  
  }
`;
const authenticatedOptions = (
  <>
    <NavLink className="nav-link" to="/add-dog">
      Add Dog
    </NavLink>
    <NavLink className="nav-link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="nav-link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="nav-link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="nav-link" to="/dogs">
      Dogs
    </NavLink>
    <NavLink className="nav-link" to="/about">
      About Us{" "}
    </NavLink>
    <NavLink className="nav-link" to="/donate">
      Donate
    </NavLink>
  </>
);

const SideNav = ({ user, open, burgerToggle }) => {
  return (
    <Side user={user} open={open} burgerToggle={burgerToggle}>
      <ul className="nav-links">
      
          {user && (
            <ul className="links-welcome">
              Welcome, {user.name.toUpperCase()}
            </ul>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        
      </ul>
    </Side>
  );
};

export default SideNav;
