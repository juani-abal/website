import styled from "styled-components";
import sectioncontact from "../Img/sectioncontact.jpg";
import example from "../Img/example.jpg";
const Home = () => {
  return (
    <Container id="homepage">
      <MainTitleContainer>
        <TitleContainer>
          <Title>AGUIRRE & DE BIASE</Title>
          <SubTitle>ESTUDIO JURÍDICO</SubTitle>
        </TitleContainer>
      </MainTitleContainer>

      <HomeImg src={example}></HomeImg>
    </Container>
  );
};
const MainTitleContainer = styled.div`
  position: absolute;
  z-index: 0;
  margin-top: 200px;
  width: 1200px;
  height: 370px;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 90%;
    height:40vh;
    margin-top:170px;
  }
  
`;
const TitleContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 850px;
  height: 300px;
  @media (max-width: 800px) {
    width: 90%;
    height:40vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;
const Title = styled.h1`
  font-family: "Source Serif Pro", serif;
  color: #244e76;
  font-size: 80px;
  height: 100px;
  margin-bottom: 10px;
  border-bottom: thick solid;

  @media (max-width: 800px) {
    font-size: 40px;
    display:flex;
    text-align:center;
    justify-content:center;
    width:110%;
    border-bottom:0px;
    
  }
`;
const SubTitle = styled.h2`
  font-family: "Source Serif Pro", serif;
  color: #244e76;
  font-size: 60px;
  height: 85px;
  position: absolute;
  margin-left: 150px;
  margin-top: 20px;
  border-bottom: thick solid;
  @media (max-width: 800px) {
    font-size: 30px;
    position:relative;
    margin-left:0px;
    width:100%;
    height: 12%;
    display:flex;
    flex-direction:column;
    text-align:center;

  }
`;
const Text = styled.div`
  font-family: "Source Serif Pro", serif;
  color: #244e76;
  font-size: 35px;
  font-weight: bolder;
  height: 85px;
  margin-top: 170px;
  width: 850px;
  text-align:center;
  
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    height:100vh;
    
   
    
  }
  
`;
const HomeImg = styled.img`
  height: 100vh;
  width: 105%;
  filter: blur(3px);
  position: fixed;
  z-index: -100;

  @media (max-width: 800px) {
    width: 130%;
    padding-left:100px;
    height:100vh;
    
  }
`;

export default Home;
