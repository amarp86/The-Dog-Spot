import styled from "styled-components";

import SideNav from "../SideNav/SideNav";



const StyleBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 20px;
right: 20px;
display: flex;

z-index: 9999;
display: none;

@media (max-width: 975px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  
}


  div {
    width: 2rem;
    height: 0.35rem;
    background-color: ${({ open }) => `white`};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 999;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? `translateX(100%)` : `translateX(0%)`};
      width: ${({ open }) => (open ? `0` : ``)};
      opcaity: ${({ open }) => (open ? `0` : `1`)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;

const Burger = ({ user, burgerToggle, open }) => {
  return (
    <>
      <StyleBurger open={open} onClick={burgerToggle}>
        <div></div>
        <div></div>
        <div></div>
        
        <SideNav user={user} open={open}  onClick={burgerToggle} />
      
      </StyleBurger>
 

    </>
  );
};

export default Burger;
