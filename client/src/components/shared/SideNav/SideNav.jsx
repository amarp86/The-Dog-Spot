import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Side = styled.div`
  
  background-color: orange;
    z-index:9999;
  .nav-link:hover
   {
    color: white;
  }
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
nav-link.a{
  font-size: 300px;
}
.nav-links{
  display: flex;
  flex-direction: column;
margin-top:100px;
  flex-wrap: wrap;
  align-content: center;
}

}
  

 
  @media screen and (max-width: 1024px) {
    {
      position: fixed;
      
      height: 100vh;
      z-index:9999;
     
      

      top: 0;
      left: 0;
      right: 0;
      
      transform: ${({ open }) =>
        open ? `translateX(0%)` : `translateX(0%)`};
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
    
     <Side >
      <div className="nav-links" >
          {user && (
            <div className="welcome">
              Welcome, {user.name.toUpperCase()}
            </div>
          )}
       {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
         
      </Side>
      
  );
};






export default SideNav;