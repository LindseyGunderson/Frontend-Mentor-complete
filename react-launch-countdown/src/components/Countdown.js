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
    border-bottom: 5px solid hsl(235, 16%, 14%);
    width: 120px;
    height: 120px;
    position: relative;
    overflow: hidden;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem hsl(235, 16%, 14%));

`;

const CardOverlay = styled.div`
    
    background: linear-gradient(180deg, rgba(0, 0, 0 , 0.25) 50%, transparent 50%);
    background-repeat:no-repeat;
    background-size: cover;
    width: inherit;
    height: inherit;
`;

const Count = styled.h2`

    background: transparent;
    color: hsl(345, 95%, 68%);
    font-size: 70px;
    width: inherit;
    height: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CircleLeft = styled.div`

    position: absolute;
    top: 54px;
    left: -5px;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: hsl(234, 17%, 12%);

`;

const CircleRight = styled.div`

    position: absolute;
    top: 54px;
    right: -5px;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: hsl(234, 17%, 12%);

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
                                <CircleLeft />
                                <Count> 08 </Count>
                                <CircleRight />
                             </CardOverlay>
                        </Card>
                   
                    <Subtitles>Days</Subtitles>
                </Container>

                {/* hours */}
                <Container>
                    <Card>
                        <CardOverlay>
                        <CircleLeft />
                        <Count> 23 </Count>
                        <CircleRight />
                        </CardOverlay>
                    </Card>
                    <Subtitles>Hours</Subtitles>
                </Container>

                {/* minutes */}
                <Container>
                    <Card>
                        <CardOverlay>
                        <CircleLeft />
                        <Count> 55 </Count>
                        <CircleRight />
                        </CardOverlay>
                    </Card>
                    <Subtitles>Minutes</Subtitles>
                </Container>

                {/* seconds */}
                <Container>
                    <Card>
                        <CardOverlay>
                        <CircleLeft />
                        <Count> 41 </Count>
                        <CircleRight />
                        </CardOverlay>
                    </Card>
                    <Subtitles>seconds</Subtitles>
                </Container>

            </CountContainer>


        </CountdownContainer>
    )
}

export default Countdown;
