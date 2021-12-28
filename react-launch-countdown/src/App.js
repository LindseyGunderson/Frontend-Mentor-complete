
// import './App.css';
import styled from "styled-components";
import Countdown from "./components/Countdown";
import StarBG from './assets/bg-stars.svg';
import Footer from "./components/Footer";

const Container = styled.div`

  min-height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom, hsl(234, 17%, 12%), hsl(236, 21%, 26%)) contain;

`;


function App() {

  return (

    <>
      <Container style={{ backgroundImage: `url(${StarBG})`}}>
        
        <Countdown />
        
        <Footer />

      </Container>
      
    
    </>
  );

}

export default App;
