import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../globalStyles';
import { CountdownContainer, Container, CountContainer, Title, Card, CardOverlay, CardBack, CardOverlayBack, Count, CircleLeft, CircleRight, Subtitles } from './CountdownStyles';

const Countdown = () => {

    // update the time remaining
    const [countdown, setCountdown] = useState({});

    useEffect( () => {

        // calculating the time for days, hours, minutes, seconds.
        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        const startCountdown = () => {

        // Date for when the event will be live
        const endDate = new Date('March 25, 2022 00:00:00');

        // get the current date
        const currentDate = new Date().getTime();

        // determine the date gap in between the two dates.
        const timeRemaining = endDate - currentDate;

        if(timeRemaining < 0){
            
            const remainingDays = "0";
            const remainingHours = "0";
            const remainingMinutes = "0";
            const remainingSeconds = "0";
            
            setCountdown({remainingDays, remainingHours, remainingMinutes, remainingSeconds});

            clearInterval(startCountdown);

        }else {

                // variables for converting the date
                const remainingDays = Math.floor(timeRemaining / days);
                const remainingHours = Math.floor((timeRemaining % days) / hours);
                const remainingMinutes = Math.floor((timeRemaining % hours) / minutes);
                const remainingSeconds = Math.floor((timeRemaining % minutes) / seconds);

                setCountdown({remainingDays, remainingHours, remainingMinutes, remainingSeconds});

            }
        }
        
        setInterval(startCountdown, 1000);

    }, [])


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
                                <Count> {countdown.remainingDays} </Count>
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
                        <Count> {countdown.remainingHours} </Count>
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
                        <Count>{countdown.remainingMinutes} </Count>
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
                        <Count> {countdown.remainingSeconds} </Count>
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
