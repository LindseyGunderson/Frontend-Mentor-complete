import React from 'react'

import { SocialsContainer, Socials, SocialLink } from '../Footer/FooterStyles';
import FooterImage from '../../assets/pattern-hills.svg';
import { FaFacebookSquare, FaPinterest, FaInstagram  } from 'react-icons/fa';

const Footer = () => {
    return (

        <SocialsContainer style={{ backgroundImage: `url(${FooterImage})`}}>
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
