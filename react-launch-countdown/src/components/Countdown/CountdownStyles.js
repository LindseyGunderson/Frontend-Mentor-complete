import styled from 'styled-components';
import {mobile, tablet} from '../../responsive';



export const CountdownContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

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

    ${tablet({ 
        
        gap: "20px"
        
        })}


    ${mobile({ 
        
        gap: "10px"
        
        })}

`;

export const Title = styled.h1`

    text-transform: uppercase;
    font-size: 2.2em;
    margin-bottom: 4rem;


    ${mobile({ 
        
        textAlign: "center"

        })}

`;


export const Card = styled.div`

    text-align: center;
    margin: 1rem 0;
    background: hsl(236, 21%, 26%);
    border-radius: 8px;
    border-bottom: 5px solid var(--neutral-blue-900);
    width: 130px;
    height: 130px;
    position: relative;
    overflow: hidden;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem hsl(235, 16%, 14%));

    transition: all 0.5s ease-in-out;


    ${tablet({ 
        
        width: "110px",
        height: "100px"
        
        })}


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
    transform-style: preserve-3d;
    transition: transform 0.5s ease-out;
`;


export const Count = styled.h2`

    background: transparent;
    color: var(--primary-soft-red);
    font-size: 5em;
    width: inherit;
    height: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotateX(0deg);

    ${tablet({ 
        
        fontSize: "4em" 
        
        })}

    ${mobile({ 
        
        fontSize: "3em" 
        
        })}
`;

export const CircleLeft = styled.div`

    position: absolute;
    top: 58px;
    left: -5px;
    width: 13px;
    height: 13px;
    border-radius: 100px;
    background: var(--neutral-blue-900);

    transition: all 0.2s ease-in-out;
    

    ${tablet({ 
        
        top: "43px",
        width: "12px",
        height: "12px" 
        
        })}

    ${mobile({ 
        
        top: "30px",
        width: "10px",
        height: "10px" 
        
        })}
`;

export const CircleRight = styled.div`

    position: absolute;
    top: 58px;
    right: -5px;
    width: 13px;
    height: 13px;
    border-radius: 100px;
    background: var(--neutral-blue-900);

    transition: all 0.2s ease-in-out;

    ${tablet({ 
        
        top: "43px",
        width: "12px",
        height: "12px" 
        
        })}

    ${mobile({ 
        
        top: "30px",
        width: "10px",
        height: "10px" 
        
        })}

`;

export const Subtitles = styled.p`

    font-size: 16px;
    letter-spacing: 3px;

    ${mobile({ 
        
        fontSize: "0.9em"
        
        })}
   

`;