import React from 'react'

import { SocialsContainer, Socials, SocialLink } from '../Footer/FooterStyles';
import { FaFacebookSquare, FaPinterest, FaInstagram  } from 'react-icons/fa';

const Footer = () => {
    return (

        <SocialsContainer>
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
