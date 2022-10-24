import styled from "styled-components";
import Cards from "../SectionCards/Cards";
import { TiMediaPlay } from "react-icons/ti";

const data = [
  {
    title: "CIVIL",
    txt1: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Sucesiones
      </p>
    ),
    txt2: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Accidentes de tránsito
      </p>
    ),
    txt3: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Cobros ejecutivos
      </p>
    ),
    txt4: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Desalojos
      </p>
    ),
  },
  {
    title: "FAMILIA",
    txt1: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Divorcios
      </p>
    ),
    txt2: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Alimentos
      </p>
    ),
    txt3: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Responsabilidad parental
      </p>
    ),
    txt4: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Cuidado personal
      </p>
    ),
    txt5: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> División de bienes
      </p>
    ),
    txt6: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Protección contra la
        violencia familiar
      </p>
    ),
  },
  {
    title: "LABORAL",
    txt1: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Despidos
      </p>
    ),
    txt2: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Accidentes de trabajo (ART)
      </p>
    ),
    txt3: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Asesoramiento de empresas
      </p>
    ),
    txt4: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Homologación y Ejecución de
        convenios
      </p>
    ),
  },
  {
    title: "PREVISIONAL",
    txt1: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Jubilaciones
      </p>
    ),
    txt2: (
      <p>
        <TiMediaPlay style={{ color: "white" }} /> Pensiones
      </p>
    ),
  },
  
];

const SectionCards = () => {
  return (
    <MainContainer id="cardsSection">
      {/*<MainTitle>SERVICIOS</MainTitle>*/}
      <CardsContainer>
        {data.map((item) => (
          <Cards>
            <figcaption>
              <CardTitle>{item.title}</CardTitle>
              <List>
                <ListItem>{item.txt1}</ListItem>
                <ListItem>{item.txt2}</ListItem>
                <ListItem>{item.txt3}</ListItem>
                <ListItem>{item.txt4}</ListItem>
                <ListItem>{item.txt5}</ListItem>
                <ListItem>{item.txt6}</ListItem>
              </List>
            </figcaption>
          </Cards>
        ))}
      </CardsContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #cccccc;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    height: 280vh;
  }
  @media (min-width: 800px) and (max-width: 1350px) {
    height: 120vh;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 800px) and (max-width: 1350px) {
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  width: 300px;
  padding-bottom: 15px;
  margin-left: 800px;
  font-family: "Source Serif Pro", serif;
  font-size: 65px;
  color: white;
  border-bottom: thick solid;
`;
const CardTitle = styled.h2`
  font-family: "Source Serif Pro", serif;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  border-bottom: thick solid;
  width: 200px;
  margin-left: 22%;
  @media (max-width: 800px) {
    margin-bottom: 30px;
    align-items: center;
    width: 300px;
    margin-left: 0px;
    padding-bottom: 10px;
  }
`;
const List = styled.ul``;

const ListItem = styled.li`
  list-style: none;
  font-size: 20px;
  color: white;
`;
export default SectionCards;

/*background : #bdbebb;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;*/
