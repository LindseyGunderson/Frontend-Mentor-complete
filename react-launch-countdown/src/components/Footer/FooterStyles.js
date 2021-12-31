import styled from 'styled-components';
// import {mobile} from '../../responsive';

export const SocialsContainer = styled.div`

    position: fixed;
    height: 200px;
    width: 100%;
    bottom: 0;
    background: cover;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const Socials = styled.div`

    &>* {
        margin: auto 1rem;
   
    }    

`;


export const SocialLink = styled.a`

    cursor: pointer;

    &>* {

        font-size: 30px;
    }

    &:hover {

        color: hsl(345, 95%, 68%);

    }
    
`;