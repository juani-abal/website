import styled from "styled-components";
import Links from "./Links";

const NavBar = () => {
  return (
    <Nav>
      <Links/>
    </Nav>
  );
};
export default NavBar;


const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: "Source Serif Pro", serif;
  margin-top: 5px;
  margin-right: 20px;


  @media (max-width: 1500px) {
    display:none;
    
  }
`;


