import styled from "styled-components";
import Map from "./Map";
import { SiGooglemaps } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const SectionContact = () => {
  return (
    <MainContainer id="contactSection">
      <InfoContainer>
        <span className="title">NUESTRA DIRECCIÓN:</span>
        <div className="textSection">
          <SiGooglemaps className="icon" />
          <span className="text">Las Heras 796, Monte Grande</span>
        </div>
        <span className="title">CONTACTANOS:</span>
        <div className="textSection">
          <SiInstagram className="icon" />
          <span className="text">@aguirredebiase</span>
        </div>
        <div className="textSection">
          <FaPhoneAlt className="icon" />
          <span className="text">11-5009-7624 / 11-6361-9328</span>
        </div>
        <div className="textSection">
          <FaFacebookSquare className="icon" />
          <span className="text">Aguirre & De Biase Abogados</span>
        </div>
      </InfoContainer>
      <MapContainer>
        <Map />
      </MapContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #cccccc;
  @media (max-width: 800px) {
    height: 150vh;
    flex-direction: column;
    padding-top: 100px;

  }
`;

const MapContainer = styled.div`
  width: 700px;
  height: 500px;
  background: #244e76;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-right: 20px;

  @media (max-width: 800px) {
    width:90%;
    padding-right: 0px;
  }
`;
const InfoContainer = styled.div`
  .title {
    width: 600px;
    height: 60px;
    font-family: "Source Serif Pro";
    font-weight: bolder;
    color: white;
    letter-spacing: 5px;
    font-size: 40px;
    line-height: 1.2;
    display: flex;
    margin-top: 40px;
    padding-left: 10px;

    @media (max-width: 800px) {
      font-size: 19px;
      height: 35px;
      border-bottom: 2px solid;
      width: 92%;
      margin-bottom: 20px;
      margin-left: 8px;
    }
  }
  .text {
    font-family: "Source Serif Pro";
    font-weight: bolder;
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: 2px;
    color: white;
    padding-left: 10px;
    margin-top: 5px;
    @media (max-width: 800px) {
      font-size: 15px;
    }
  }
  .textSection {
    width: 600px;
    display: flex;
    flex-direction: row;
    height: 40px;
    padding-top: 15px;

    @media (max-width: 800px) {
      padding-left: 15px;
    }
  }
  .textSection .icon {
    color: white;
    font-size: 35px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
  }
  width: 700px;
  height: 500px;
  background: #244e76;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;

  @media (max-width: 800px) {
    width:90%;
    height: 400px;
    padding-left: 0px;
  }
`;

export default SectionContact;
