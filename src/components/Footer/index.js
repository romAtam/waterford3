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
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin"> How it works</FooterLink>
                                <FooterLink to="/signin"> Testimonials</FooterLink>
                                <FooterLink to="/signin"> Careers</FooterLink>
                                <FooterLink to="/signin"> Investors</FooterLink>
                                <FooterLink to="/signin"> Terms of Services</FooterLink>
                                </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                    <FooterLinkItems>
              
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Ageny</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                      
                    </FooterLinkItems>
                    <FooterLinkItems>
                    
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin"> How it works</FooterLink>
                                <FooterLink to="/signin"> Testimonials</FooterLink>
                                <FooterLink to="/signin"> Careers</FooterLink>
                                <FooterLink to="/signin"> Investors</FooterLink>
                                <FooterLink to="/signin"> Terms of Services</FooterLink>
                   
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                 
            </FooterLinksContainer>
           
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
