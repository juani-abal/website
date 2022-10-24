import styled from "styled-components";
import sectioninfo from "../Img/sectioninfo.jpg";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

const SectionInfo = () => {
  return (
    <MainContainer>
      <ImgContent>
        <Title>NUESTRO ESTUDIO</Title>
        <p>
          Nos identificamos como un estudio <span className="bold">jóven</span>,{" "}
          <span className="bold">dinámico</span>, y en constante capacitación.
        </p>
      </ImgContent>
      <Img src={sectioninfo}></Img>
      <TextSection>
        <p>
          Nos identificamos como un estudio <span className="bold">jóven</span>,{" "}
          <span className="bold">dinámico</span>, y en constante capacitación.
        </p>
      </TextSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;
  @media (max-width: 800px) {
    height: 50vh;
    margin-bottom: 20px;
  }
`;
const TextSection = styled.div`
p{
  padding-left:100px;
  padding-right:100px;
  
}
  width: 50%;
  height: 70vh;
  background: #244e76;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  font-family: "Source Serif Pro";
  color: white;
  font-style: italic;
  line-height: 1.6;
  font-size: 50px;
  .bold {
    font-weight: 800;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 50%;
  height: 70vh;
  @media (max-width: 800px) {
    margin-right: 0px;
    width: 100%;
  }
`;
const ImgContent = styled.div`
  background: rgba(36, 78, 118, 0.6);
  width: 50%;
  height: 70vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 950px;
  @media (max-width: 800px) {
    .bold {
      font-weight: 800;
    }
    p {
      margin-top: 10px;
      font-family: "Source Serif Pro";
      color: white;
      font-style: italic;
      font-size: 25px;
      line-height: 40px;
      padding-left: 20px;
    }
    margin-right: 0px;
    width: 100%;
  }
  @media (min-width: 800px) {
    p {
      display: none;
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
  margin-right: 250px;
  margin-top: 100px;
  line-height: 1.2;
  @media (max-width: 800px) {
    margin-right: -20px;
    margin-top: 80px;
    width: 100%;
    font-size: 50px;
  }
`;

export default SectionInfo;
