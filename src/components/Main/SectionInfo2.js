import styled from "styled-components";
import sectioninfo from "../Img/sectioninfo.jpg";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import cuadro from "../Img/cuadro.jpg";
import quienessomos from "../Img/quienessomos.jpg";

const SectionInfo2 = () => {
  return (
    <MainContainer id="sectionInfo2">
      <TextSection>
        <span>¿QUIENES SOMOS?</span>
        <p>
          Nuestra firma se distingue por su modelo de prestación de servicios
          orientado al cliente, con un compromiso incondicional con ellos y sus
          necesidades.
        </p>
      </TextSection>
      <Img src={quienessomos}></Img>
      <ImgContent>
        <Title className="title">¿QUIENES SOMOS?</Title>
      </ImgContent>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;
  @media (max-width: 800px) {
  }
  @media (min-width: 800px) and (max-width: 1150px) {
    height:50vh;
  }
`;
const TextSection = styled.div`

  width: 50%;
  height: 70vh;
  background: #244e76;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) and (max-width: 1150px) {
    height:50vh;
  }
  p {
    font-family: "Source Serif Pro";
    color: white;
    font-style: none;
    line-height: 1.6;
    font-size: 38px;
    font-style: italic;
    margin-bottom:100px;
    padding-top:;
    @media (min-width: 800px) and (max-width: 1150px) {
      font-size: 30px;
      
    }
  }

  @media (min-width: 800px) {
    span {
      display: none;
    }
  }
  @media (max-width: 800px) {
    span {
      width: 95%;
      font-family: "Source Serif Pro";
      font-weight: bolder;
      color: white;
      letter-spacing: 2px;
      font-size: 35px;
      margin-top: 50px;
      line-height: 1.2;
    }
    p {
      line-height: 45px;
      font-size:25px;
    }
    width: 100%;
    flex-direction: column;
  }
  
`;
const Img = styled.img`
  width: 50%;
  height: 60vh;
  @media (max-width: 800px) {
    margin-left: 0;
    display: none;
  }
  @media (min-width: 800px) and (max-width: 1150px)  {
    height:50vh;
  }
`;
const ImgContent = styled.div`
  background: rgba(36, 78, 118, 0.6);
  width: 50%;
  height: 70vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 50%;
  @media (max-width: 800px) {
    margin-left: 0;
    display: none;
   
  }
  @media (min-width: 800px) and (max-width: 1150px)  {
   margin-left:50%; 
   display:flex;
   justify-content:center;
   height:50vh;
   
   .title{
    margin-right:100px;
    padding-left:100px;
    margin-bottom:400px;
    font-size:50px;
   }
  }
`;
const Title = styled.span`
  width: 230px;
  height: 150px;
  font-family: "Source Serif Pro";
  font-weight: bolder;
  color: white;
  letter-spacing: 5px;
  font-size: 80px;
  margin-left:50px ;
  margin-top: 100px;
  line-height: 1.2;
`;

export default SectionInfo2;
