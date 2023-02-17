import React from 'react'
import{
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';
import { animateScroll as scroll } from 'react-scroll';
import { NavLogo } from '../Navbar/NavbarElements';
import Services from '../Services';
const SignIn = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
};

  return (
    <>
     <Container>
     <NavLogo to='/' onClick={toggleHome}>The Brow Lounge</NavLogo>
     <Services />  
     </Container> 
    </>
  )
}

export default SignIn