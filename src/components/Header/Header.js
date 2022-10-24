import styled from "styled-components";
import NavBar from "../Header/NavBar";
import logo from '../Img/logo.png'
import NavBarMobile from "./NavBarMobile";


const Header = () => {
     return (
        <Container>
            <ImgContainer>
            <Title>AGUIRRE & DE BIASE</Title>
            </ImgContainer>
            <NavBar/>
            <NavBarMobile />
        </Container>
     )
}

const Container = styled.div`
height: 70px;
width: 100%;
background: #244E76;
display: flex;
flex-direction:row;
position: fixed;
z-index: 100;
border-bottom:1px solid #BDBEBB;
`
const ImgContainer = styled.div`
width: 500px;
display: flex;
justify-content: center;

`
const Img = styled.img`
height: 65px;
width: 65px;
@media (max-width: 800px) {
    display:none;  
}

`
const Title = styled.h1`
margin-left: 10px;
font-family: 'Source Serif Pro', serif;
display:flex;
justify-content:center;
align-items:center;
font-size: 35px;
color:white;

@media (max-width: 800px) {
    font-size:23px;
    margin-left:-110px;
    margin-top:22px;
  }

`

export default Header;
