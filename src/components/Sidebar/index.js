import React from 'react'
import { SidebarContainer,
  Icon, 
  CloseIcon,
   SidebarWrapper, 
   SidebarMenu, 
   SidebarLink, 
   SideBtnWrap, 
   SidebarRoute  
  } from './SidebarElements'

const Sidebar = ({is0pen, toggle}) => {
  return (
    <SidebarContainer is0pen={is0pen} onClick={toggle}>
      <Icon onClick ={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>products</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>offers</SidebarLink>
          <SidebarLink to='home' onClick={toggle}>make up</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>nails</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
