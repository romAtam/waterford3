import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin, 
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Shop</FooterLinkTitle>
                                <FooterLink to="/">Brow Fix UK</FooterLink>
                                <FooterLink to="/">Brow Xenna </FooterLink>
                                <FooterLink to="/"> Biometics Intensive</FooterLink>
                                <FooterLink to="/"> Hair Well</FooterLink>
                                <FooterLink to="/"> Pro Tan </FooterLink>
                                <FooterLink to="/"> Accessories</FooterLink>
                                </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Phone:+353 1 633 6737</FooterLink>
                                <FooterLink to="/">info@claudinekingbrows.ie</FooterLink>
                                <FooterLink to="/">Address: </FooterLink>
                                <FooterLink to="/">22 William St S, Dublin 2, Ireland</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                    <FooterLinkItems>
              
                            <FooterLinkTitle>Gallery</FooterLinkTitle>
                                <FooterLink to="/">manu/pedi</FooterLink>
                                <FooterLink to="/">lash&brow</FooterLink>
                                <FooterLink to="/">facials</FooterLink>
                                <FooterLink to="/">waxing</FooterLink>
                      
                    </FooterLinkItems>
                    <FooterLinkItems>
                    
                            <FooterLinkTitle>OPENING HOURS</FooterLinkTitle>
                                <FooterLink to="/">Sun,Mon Closed</FooterLink>
                                <FooterLink to="/">Tue 10a.m.–8p.m.</FooterLink>
                                <FooterLink to="/">  Wed 10a.m.–8p.m.</FooterLink>
                                <FooterLink to="/"> Thu 10a.m.–8p.m.</FooterLink>
                                <FooterLink to="/">Fri 10a.m.–6p.m. </FooterLink>
                                <FooterLink to="/"> Sat 10a.m.–6p.m.</FooterLink>
                   
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                 
            </FooterLinksContainer>
           
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
