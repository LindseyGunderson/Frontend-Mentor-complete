import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../globalStyles';

const CountdownContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;

`;

const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`;


const CountContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

`;

const Title = styled.h1`

    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 5rem;

`;


const Card = styled.div`

    text-align: center;
    margin: 1rem 0;
    background: hsl(236, 21%, 26%);
    border-radius: 8px;
    border-bottom: 8px solid hsl(235, 16%, 14%);
    width: 120px;
    height: 120px;
    overflow: hidden;

`;

const CardOverlay = styled.div`
    
    background: linear-gradient(180deg, rgba(0, 0, 0 , 0.2) 50%, transparent 50%);
    background-repeat:no-repeat;
    background-size: cover;
    width: 120px;
    height: 120px;
`;

const Count = styled.h2`

    background: transparent;
    color: hsl(345, 95%, 68%);
    font-size: 80px;
    width: 120px;
    height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Subtitles = styled.p`

    font-size: 16px;

`;



const Countdown = () => {
    return (
        <CountdownContainer>

        <GlobalStyle />

            <Container>
                <Title> We're Launching Soon</Title>
            </Container>
            

            <CountContainer>

                {/* days */}
                <Container>
                   
                        <Card>
                             <CardOverlay>
                                <Count> 08 </Count>
                             </CardOverlay>
                        </Card>
                   
                    <Subtitles>Days</Subtitles>
                </Container>

                {/* hours */}
                <Container>
                    <Card>
                        <Count> 23 </Count>
                    </Card>
                    <Subtitles>Hours</Subtitles>
                </Container>

                {/* minutes */}
                <Container>
                    <Card>
                        <Count> 55 </Count>
                    </Card>
                    <Subtitles>Minutes</Subtitles>
                </Container>

                {/* seconds */}
                <Container>
                    <Card>
                        <Count> 41 </Count>
                    </Card>
                    <Subtitles>seconds</Subtitles>
                </Container>

            </CountContainer>


        </CountdownContainer>
    )
}

export default Countdown;
