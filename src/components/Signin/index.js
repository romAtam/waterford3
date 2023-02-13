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
const SignIn = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
};

  return (
    <>
     <Container>
     <NavLogo to='/' onClick={toggleHome}>The Brow Lounge</NavLogo>
        <FormWrap>
            <Icon to='/'dalla></Icon>
            <FormContent>
                <Form action = '#'>
                    <FormH1> Sign in to your account</FormH1>
                    <FormLabel htmlFor ='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
     </Container> 
    </>
  )
}

export default SignIn