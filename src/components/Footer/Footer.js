import styled from "styled-components";
import logo from "../Img/logo.png";
import logojpg from "../Img/logojpg.jpg";
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { TiMediaPlay } from "react-icons/ti";

const Footer = () => {
  return (
    <MainContainer>
      <ChildContainerHidden>
        <List>
          <Item>
            <TiMediaPlay style={{ color: "white" }} />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#homepage"
            >
              HOME
            </a>
          </Item>
          <Item>
            <TiMediaPlay style={{ color: "white" }} />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#sectionInfo2"
            >
              QUIENES SOMOS
            </a>
          </Item>
          <Item>
            <TiMediaPlay style={{ color: "white" }} />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#cardsSection"
            >
              SERVICIOS
            </a>
          </Item>
          <Item>
            <TiMediaPlay style={{ color: "white" }} />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#contactSection"
            >
              CONTACTO
            </a>
          </Item>
        </List>
      </ChildContainerHidden>
      <ChildContainer>
        <div className="imgContainer">
          <img src={logojpg}></img>
        </div>
      </ChildContainer>
      <ChildContainer>
        <ContactItem>
          <SiInstagram style={{ color: "white", fontSize: "30px" }} />
          <span style={{ paddingLeft: "10px" }}>@aguirredebiase</span>
        </ContactItem>
        <ContactItem>
          <SiWhatsapp style={{ color: "white", fontSize: "30px" }} />
          <span style={{ paddingLeft: "10px" }}>
            11-5009-7624 / 11-6361-9328
          </span>
        </ContactItem>
        <ContactItem>
          <SiGooglemaps style={{ color: "white", fontSize: "30px" }} />
          <span style={{ paddingLeft: "10px" }}>
            Las Heras 796, Monte Grande
          </span>
        </ContactItem>
      </ChildContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 25vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 60vh;
  }
  @media (min-width: 800px) and (max-width: 1350px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  }
`;
const ChildContainer = styled.div`
  img {
    height: 170px;
    width: 450px;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .imgContainer {
    margin-left: -53px;
    height: 170px;
    width: 400px;
    @media (max-width: 800px) {
      margin-left: 0px;
      width: 100%;
    }
   
  }
  background: #244e76;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;

  @media (max-width: 800px) {
    width: 100%;
  }
  @media (min-width: 800px) and (max-width: 1350px) {
    width: 100%;
  }
`;
const ChildContainerHidden = styled.div`
  background: #244e76;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;

  @media (max-width: 1350px) {
    width: 100%;
    display: none;
  }
 

`;
const List = styled.ul`
  font-family: "Source Serif Pro", serif;
  list-style: none;
  line-height: 2;
  font-size: 20px;
  margin-top: 5px;
  margin-right: 20px;
  letter-spacing: 1px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;
const Item = styled.li``;

const ContactItem = styled.div`
  color: white;
  font-family: "Source Serif Pro", serif;
  font-size: 25px;
  width: 400px;
  height: 30px;
  margin-top: 15px;
  display: flex;

  @media (max-width: 800px) {
    width: 97%;
    height: 40px;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`;

export default Footer;
