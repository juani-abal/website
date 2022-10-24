import styled from "styled-components";

const Links = (props) => {
    return ( <List>
        <Item onClick={ () => props.closeMobileNav()}> <a href="#homepage">HOME</a></Item>
        <Item onClick={ () => props.closeMobileNav()}> <a href="#sectionInfo2">QUIENES SOMOS</a></Item>
        <Item onClick={ () => props.closeMobileNav()}> <a href="#cardsSection">SERVICIOS</a></Item>
        <Item onClick={ () => props.closeMobileNav()}> <a href="#contactSection">CONTACTO</a></Item>
        
        
      </List>
       );
}
 
export default Links;



const Item = styled.li`
a{
    color:#FFFF;
    text-decoration: none;
    transition: .2s ease;
    &:hover { color: #CCCCCC;};
  }
   
}
  font-weight: bolder;
  color: #bdbebb;
  font-size: 25px;
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
 
  @media (max-width: 1500px) {
  align-self: start;
  font-size:20px;
  margin-left:-20px;
  margin-bottom:20px;
  transition: .3s ease;
  padding: 10px;
  border-bottom: 1px solid grey;
  &:hover {  background: rgba(255, 255, 255, 0.1);};
  
  }
  
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  width: 800px;
  justify-content: end;
  margin-top:35px;
  
  
  @media (max-width: 1500px) {
    justify-content: start;
    display: flex;
    flex-direction:column;
    margin-top: 70px;
    background: #041F30;
    opacity: 0.95;
    padding-top: 50px;
    margin-top:100px; 
  }

  @media (min-width: 800px) and (max-width: 1350px) {
    margin-top:120px;
  }
  @media (min-width: 1351px) and (max-width: 1500px) {
    margin-top:120px;
  }
`;