import styled from "styled-components";
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from "./Footer/Footer";


const Body = () => {
    return (
        <BodyContainer>
            <Header />
            <Main />
            <Footer />
        </BodyContainer>
    )
}
const BodyContainer = styled.div`
display: flex;
flex-direction: column;
max-width:100%;
overflow-Y: hidden;
position:relative;
`
export default Body;
