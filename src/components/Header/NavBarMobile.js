import styled from "styled-components";
import Links from "./Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const NavBarMobile = () => {
  const [clickState, SetClickState] = useState(false);
  const Hamburguer = (<GiHamburgerMenu className="burguerBtn" onClick={() => SetClickState(!clickState)}/>);
  const Close = (<RiCloseFill className="burguerBtn" onClick={() => SetClickState(!clickState)}/>);
  const closeMobileNav  = () => SetClickState (false);
  
  return (
    <Nav>
      {clickState ? Close : Hamburguer}
      {/*Si clickState esta en true, que se muestre Close, sino que se muestr Hamburguer*/}
      {clickState && <Links closeMobileNav = {closeMobileNav}/>}
      {/*Si clickState esta en true, que se muestren los links*/}
    </Nav>
  );
};

export default NavBarMobile;

const Nav = styled.nav`
  .burguerBtn {
    font-size: 50px;
    color: #FFFF;
    position: absolute;
    right: 30px;
    top:10px;
    cursor: pointer;
    @media (max-width: 1500px) {
      font-size: 60px;
      top: 15px;
    }
  }
  display: none;

  @media (max-width: 1500px) {
    position:absolute;
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    right:-30px;
    width: 70%;
    height: 100vh;
    font-family: "Source Serif Pro", serif;
    margin-right: 20px;
    transition:.4s ease;
    

   
  }
`;
