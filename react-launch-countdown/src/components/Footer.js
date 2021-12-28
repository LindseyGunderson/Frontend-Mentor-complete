import React from 'react'
import styled from 'styled-components';

import FooterImage from '../assets/pattern-hills.svg';
import { FaFacebookSquare, FaPinterest, FaInstagram  } from 'react-icons/fa';


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

    &:hover {

        color: hsl(345, 95%, 68%);

    }
    

`;


const Footer = () => {
    return (

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

    )
}

export default Footer
