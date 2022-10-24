import styled from "styled-components";
import NavBar from "../Header/NavBar";
import logojpg from '../Img/logojpg.jpg'
import NavBarMobile from "./NavBarMobile";


const Header = () => {
     return (
        <Container>
            <ImgContainer>
            <img src={logojpg}></img>
            </ImgContainer>
            <NavBar/>
            <NavBarMobile />
        </Container>
     )
}

const Container = styled.div`
height: 120px;
width: 100%;
background: #244e76;
display: flex;
flex-direction:row;
position: fixed;
z-index: 100;
border-bottom:1px solid grey;
@media (max-width: 800px){
    height:100px;
}
`
const ImgContainer = styled.div`
width: 500px;
display: flex;

img{
    width:350px;
    height:120px;
    @media (max-width: 800px){
        width:60%;
        height:100px;
        
    }
}

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
