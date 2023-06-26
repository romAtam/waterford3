import styled from 'styled-components'
import{MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
background:#062925;
display: flex;
justify-content: center;
align-items:  center;
padding: 0 30px;
height: 800px;
position: relative;

z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
background: transparent;
opacity: 0.5;
    z-index:2;
}
`;

export const HeroBg = styled.div`
position: absolute;
top:0;
right:0;
bottom:0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;


`;
export const Shild = styled.div`
width: 50%;
height: 100%;
opacity:0.8;
background: ${({light}) =>(light&&"pink")}; 
z-index:1`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: transparent;

`
export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 1px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: pink;
opacity: 0.8;
font-size: 48px;
text-align:center;
//font-family: 'Sacramento', cursive;


@media screen and (max-width: 768px){
font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const HeroP = styled.p`
margin-top:24px;
color: white;
font-size: 36px;
letter-spacing:2px;
text-shadow: black 1px 0 10px;
text-align: center;
font-family: 'Girassol', cursive;
max-width: 600px;
color: white;
opacity: 0.8;

@media screen and (max-width: 768px){
font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
width:50%;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

