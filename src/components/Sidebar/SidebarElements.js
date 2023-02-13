import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #062925;
display: grid;
align-items: center;
top: 0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({is0pen}) => (is0pen? '100%' : '0')};
top: ${({is0pen}) => (is0pen? '0': '-100%')}
`;

export const CloseIcon = styled(FaTimes)`
color:#fff
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
// grid-template-columns : repeat(6,60px);
}
`

export const SidebarLink = styled(LinkS)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 box-shadow:1px -1px 5px 1px #000000;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-shadow:3px 5px 2px black;
 text-decoration: none;
 color: wheat;
 letter-spacing:3px;
 cursor: pointer;
 font-family: 'Girassol', cursive;
 &:hover {
    color: orange;
    transition: 0.2s ease-in-out;
    box-shadow:1px -1px 5px 1px grey;
 }
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
border-radius: 40px;
background: transparent;
white-space: nowrap;
padding: 1px 34px;
color: wheat;
font-size: 36px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
border-top: 1px solid grey;
font-family: 'Sacramento', cursive;
box-shadow: 0px 1px 11px blue;
&:hover{
    transition: all 1.8s ease-in-out;
   box-shadow: none;
    color: yellow;
 
   border: none; border-top:1px solid red;

}
`;