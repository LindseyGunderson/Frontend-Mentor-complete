
// import './App.css';
import styled from "styled-components";
import Countdown from "./components/Countdown";
import StarBG from './assets/bg-stars.svg';

const Container = styled.div`

  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, hsl(234, 17%, 12%), hsl(236, 21%, 26%));

`;


function App() {

  return (

    <>
      <Container style={{ backgroundImage: `url(${StarBG})`, backgroundSize: 'cover' }}>
        
        <Countdown />
        
      </Container>
      
    
    </>
  );

}

export default App;
