import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background:${({scrollNav})=>(scrollNav?'#062925':"rgba(0,0,0,1)")};
height: 80px;
//margin-top: -80px; 
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;


z-index: 10;

@media screen and (max-width: 960px){
    transition: 1.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index:1; 
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: orange;
justify-self: flex-start;
cursor: pointer;
font-size: 1.7rem;
align-self:center ;
margin-left: 24px;
text-decoration: none;
font-family: 'Encode Sans', sans-serif;
transition:all 0.9s ease-in-out;
font-family: 'Sacramento', cursive;
/* font-family: 'Encode Sans', sans-serif;
font-family: 'Pacifico', cursive; */
&:hover{
    color:wheat;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
    
}
`

export const NavItem = styled.li`
height: 80px;
padding-right: 10px;

`
export const NavLinks = styled(LinkS)`
color: gray;
display: flex;
align-items: center;
text-decoration: none;
border-radius:18px;
padding: 0px 1rem;
height: 100%;
font-family: 'Girassol', cursive;
transition:all 0.8s;
cursor: pointer;

&.active {
    border-bottom: 3px solid orange;
    border-top:1px solid orange;
    color:wheat;
  
}
&:hover {
    border-bottom: 1px solid blue;
    border-top:1px solid blue;
    color:wheat;
}
`;

export const NavBtn = styled.nav`
display:flex;
color: gray;

align-items:center;

@media screen and (max-width: 768px){
    display: none;  
}
`
export const NavBtnLink = styled(LinkR  )`
border-radius: 1px;
background: transparent;
white-space: nowrap;
padding: 0px 22px;
border-radius:15px;
color: gray;
font-size: 20px;
outline: none;
border: none;
cursor: pointer;
//transition: all 0.2 ease-in-out;
text-decoration: none;
font-family: 'Encode Sans', sans-serif;
box-shadow: 1px 1px 2px 1px blue;

font-family: 'Sacramento', cursive;
&:hover{
    transition: all 0.2s ease-in-out;
    box-shadow: 1px 1px 6px 1px blue;
    color: wheat;

}
`




