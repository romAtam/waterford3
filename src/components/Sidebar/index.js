import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import LogImage from '../../images/browlogo.png'
import { SidebarContainer,
  Icon, 
  CloseIcon,
   SidebarWrapper, 
   SidebarMenu, 
   SidebarLink, 
   SideBtnWrap, 
   SidebarRoute  
  } from './SidebarElements'
import { NavLogo } from '../Navbar/NavbarElements'
import {Logo} from "../Navbar/NavbarElements"
const Sidebar = ({is0pen, toggle}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
};
  return (
    <SidebarContainer is0pen={is0pen} onClick={toggle}>
           <NavLogo to='/' onClick={toggleHome}>the brow lounge <Logo src={LogImage} alt="LOGO"/></NavLogo>
      <Icon onClick ={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
 
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>contacts</SidebarLink> 
          <SidebarLink to='services' onClick={toggle}> our services</SidebarLink>
          <SidebarLink to='home' onClick={toggle}>price list</SidebarLink>
          <SidebarLink to='testimonials' onClick={toggle}>team</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>shop</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
