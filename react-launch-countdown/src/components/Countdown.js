import React from 'react';
import styled from 'styled-components';

import FooterImage from '../assets/pattern-hills.svg';
import { FaFacebookSquare, FaPinterest, FaInstagram  } from 'react-icons/fa';
import GlobalStyle from '../globalStyles';

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`;

const CountdownContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

`;

const Title = styled.h1`

    text-transform: uppercase;
    font-size: 30px;

`;

const CardContainer = styled.div`

    text-align: center;

`;

const Card = styled.div`

    text-align: center;
    margin: 1rem 0;
    background-image: linear-gradient(to bottom, hsl(236, 21%, 26%) 50%,  hsl(237, 18%, 59%) 50%);
    border-radius: 8px;
    border-bottom: 6px solid hsl(235, 16%, 14%);
    padding: 1rem;

`;

const Count = styled.h2`

    background: transparent;
    background-image: linear-gradient(to bottom, hsl(236, 21%, 26%) 50%,  hsl(237, 18%, 59%) 50%);
    color: hsl(345, 95%, 68%);
    font-size: 70px;

`;

const Subtitles = styled.p`

    font-size: 16px;

`;

const SocialsContainer = styled.div`

    position: fixed;
    height: 200px;
    width: 100%;
    bottom: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

const Socials = styled.div`

    &>* {
        margin: auto 1rem;
   
    }    

`;


const SocialLink = styled.a`

    cursor: pointer;

    &>* {

        font-size: 25px;
    }
    

`;


const Countdown = () => {
    return (
        <Wrapper>

        <GlobalStyle />

            <Title> We're Launching Soon</Title>

            <CountdownContainer>

                {/* days */}
                <CardContainer>
                    <Card>
                        <Count> 08 </Count>
                    </Card>
                    <Subtitles>Days</Subtitles>
                </CardContainer>

                {/* hours */}
                <CardContainer>
                    <Card>
                        <Count> 23 </Count>
                    </Card>
                    <Subtitles>Hours</Subtitles>
                </CardContainer>

                {/* minutes */}
                <CardContainer>
                    <Card>
                        <Count> 55 </Count>
                    </Card>
                    <Subtitles>Minutes</Subtitles>
                </CardContainer>

                {/* seconds */}
                <CardContainer>
                    <Card>
                        <Count> 41 </Count>
                    </Card>
                    <Subtitles>seconds</Subtitles>
                </CardContainer>

            </CountdownContainer>

            <SocialsContainer style={{ backgroundImage: `url(${FooterImage})`, backgroundSize: 'cover' }}>
                <Socials>

                    <SocialLink>
                        <FaFacebookSquare />
                    </SocialLink>

                    <SocialLink>
                        <FaPinterest />
                    </SocialLink>
                    
                    <SocialLink>
                        <FaInstagram />
                    </SocialLink>

                </Socials>
               
            </SocialsContainer>
        </Wrapper>
    )
}

export default Countdown;
