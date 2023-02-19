import styled from 'styled-components'
import{MdKeyboardArrowLeft} from 'react-icons/md';
import Icon2 from '../../images/back1.jpg'

export const MenuItem=styled.div`

text-align: center;
padding:0  20px ;
background: transparent;

`
export const ItemWraper=styled.div`
display: flex;  

margin:0 auto;
justify-content: space-between;
max-width:900px;
padding: 20px 10px;
margin-bottom:20px;
background:rgba(6, 41, 37, 0.7);
box-shadow:1px 2px 10px 1px cyan;
margin-top:10px ;
border-radius:12px;
font-family: 'Girassol', cursive !important;
transition:all 0.4s;
&:hover{
    background:rgba(6, 41, 37, 1);
    box-shadow:1px 2px 15px 4px cyan;
}
`
export const Navi=styled.div`
position: fixed;
width: 100vw;
background:#062925;
height: 80px;
padding-top: 10px;
box-shadow:1px 1px 5px 1px cyan;

`
export const Menu=styled.div`
padding-top:80px;
`
export const Param=styled.p`
color:cyan;
font-family: 'Girassol', cursive !important;
letter-spacing:2px;

`
export const MenuName=styled.h2`
color:cyan;
text-shadow:3px 1px 3px black;
padding-top: 30px;
letter-spacing: 4px;
font-size:2rem;
font-family: 'Girassol', cursive !important;
`

export const Cont=styled.div`
background-image:url(${Icon2});

background-position:center;
background-size: cover;
padding-bottom: 20px ;
`
export const Price=styled.span`
color:cyan;
font-weight:bold;
`
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
margin-left: 8px;
font-size: 20px;
`
