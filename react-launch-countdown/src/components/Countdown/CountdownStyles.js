import styled from 'styled-components';
import {mobile} from '../../responsive';



export const CountdownContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    ${mobile({ 
        
        
        })}

`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;


`;


export const CountContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    ${mobile({ 
        
        gap: "10px"
        
        })}

`;

export const Title = styled.h1`

    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 4rem;

    ${mobile({ 
        
        textAlign: "center",
        fontSize: "2.2em"
        
        })}

`;


export const Card = styled.div`

    text-align: center;
    margin: 1rem 0;
    background: hsl(236, 21%, 26%);
    border-radius: 8px;
    border-bottom: 5px solid hsl(235, 16%, 14%);
    width: 130px;
    height: 130px;
    position: relative;
    overflow: hidden;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem hsl(235, 16%, 14%));

    ${mobile({ 
        
        width: "75px",
        height: "70px"
        
        })}

`;

export const CardOverlay = styled.div`
    
    background: linear-gradient(180deg, rgba(0, 0, 0 , 0.25) 50%, transparent 50%);
    background-repeat:no-repeat;
    background-size: cover;
    width: inherit;
    height: inherit;
`;

export const Count = styled.h2`

    background: transparent;
    color: hsl(345, 95%, 68%);
    font-size: 70px;
    width: inherit;
    height: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mobile({ 
        
        fontSize: "3em" 
        
        })}
`;

export const CircleLeft = styled.div`

    position: absolute;
    top: 30px;
    left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: hsl(234, 17%, 12%);

`;

export const CircleRight = styled.div`

    position: absolute;
    top: 30px;
    right: -5px;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: hsl(234, 17%, 12%);

`;

export const Subtitles = styled.p`

    font-size: 16px;

    ${mobile({ 
        
        fontSize: "0.9em",
        letterSpacing: "3px"
        
        })}
   

`;