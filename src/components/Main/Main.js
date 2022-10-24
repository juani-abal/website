import styled from "styled-components";
import Home from "./Home";
import SectionCards from "../SectionCards/SectionCards";
import SectionInfo from "./SectionInfo";
import SectionVision from "./SectionVision";
import SectionContact from "./SectionContact";
import SectionInfo2 from "./SectionInfo2";


const Main = () =>{
    return (
        <Container>
            <Home/>
            <SectionInfo2 />
            {/*<SectionVision />*/}
            <SectionCards />
            <SectionInfo />
            <SectionContact/>
        </Container>
    )
}

const Container = styled.div`

`

export default Main;