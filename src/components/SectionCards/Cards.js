import styled from "styled-components";

const Cards = (props) => {
  return <Card>{props.children}</Card>;
};

const Card = styled.figure`
  position: relative;
  width: 350px;
  height: 450px;
  background: #244e76;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  transition: all 0.4s ease;
  box-shadow: 13px 13px rgba(0, 0, 0, 0.13);
  &:hover {
    box-shadow: 20px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 800px) {
   width: 300px;
   height:450px;
   
   
  }
`;

export default Cards;
/*height: 400px;
width: 300px;
border-radius: 5px;
border-top: solid 3px;
border-color:#244E76;
box-shadow: 4px 4px 8px 6px rgba(0,0,0,0.2);
margin: 10px;
background: white;
justify-content: stretch;*/
