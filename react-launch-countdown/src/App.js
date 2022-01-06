
import styled from "styled-components";
import Countdown from "./components/Countdown/Countdown";
import StarBG from './assets/bg-stars.svg';
import Footer from "./components/Footer/Footer";
import {mobile} from './responsive';

const Container = styled.div`

  padding-top: 15vh;
  min-height: 100vh;
  overflow: hidden;
  background: url(${StarBG}), hsl(249, 18%, 14%);

  ${mobile({ 
        
        paddingTop: "18vh"

    })}

`;


function App() {

  return (

    <>
      <Container>
        
        <Countdown />
        
        <Footer />

      </Container>
      
    
    </>
  );

}

export default App;
