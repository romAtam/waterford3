import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
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
const Sidebar = ({is0pen, toggle}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
};
  return (
    <SidebarContainer is0pen={is0pen} onClick={toggle}>
      <Icon onClick ={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
      <NavLogo to='/' onClick={toggleHome}>The Brow Lounge</NavLogo>
        <SidebarMenu>
          <SidebarLink to='offers' onClick={toggle}>winter offers</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>main our services</SidebarLink>
          <SidebarLink to='home' onClick={toggle}>price list</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>book to specialist</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>go to online shop</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
