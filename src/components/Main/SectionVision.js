import styled from "styled-components";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

const SectionVision = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>¿QUIENES SOMOS?</Title>
      </TitleContainer>
      <TextContainer>
      <LoremIpsum p={1} />
      </TextContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 60vh;
  width: 100%;
 
  background : #244e76;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const TitleContainer = styled.div`
  height: 70px;
  padding-top: 30px;
  margin-bottom: 50px;
`;
const Title = styled.span`
  font-family: "Source Serif Pro";
  font-weight: bolder;
  color: white;
  letter-spacing: 1px;
  font-size: 50px;
  font-style: italic;
  border-bottom: solid;
`;
const TextContainer = styled.div`
  width: 900px;
  height: 400px;
  display: flex;
  flex-direction:column;
  text-align: center;
  font-family: "Source Serif Pro";
  color: white;
  font-style: italic;
  line-height: 1.6;
  font-size:25px;
`;
const Text = styled.p`

`;

export default SectionVision;
