import styled from 'styled-components'
import{MdKeyboardArrowLeft} from 'react-icons/md';
import Icon2 from '../../images/back1.jpg'

export const MenuItem=styled.div`

text-align: center;
padding:0  10px ;
background: transparent;
margin: 0 auto;
`
export const ItemWraper=styled.div`
display: flex;  
margin: 0 auto;

justify-content: space-between;
max-width:900px;
padding: 10px 5px;
margin-bottom:20px;
background:rgba(6, 41, 37, 1);
box-shadow:1px 4px 40px  4px rgba(0,0,0,1);
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
background:rgba(0,0,0,0.9);
height: 80px;
padding-top: 10px;


`
export const Menu=styled.div`
padding-top:80px;
`
export const Param=styled.p`
color:wheat;
font-family: 'Girassol', cursive !important;
letter-spacing:2px;

`
export const MenuName=styled.h2`
color:wheat;
background-color:rgba(0,0,0,0.6);
box-shadow:1px 40px 40px  40px rgba(0,0,0,1);
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
color:wheat;
font-weight:bold;
`
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
margin-left: 8px;
margin-bottom:20px;
font-size: 20px;
`
