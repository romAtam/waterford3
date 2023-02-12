// import { MdOutlineMaximize, MdSignalCellularConnectedNoInternet2Bar } from 'react-icons/md';
import styled from 'styled-components'
import hair from "../../images/hair.jpg"
export const InfoContainer = styled.div`
 color: #000;
 background: #FFE1E1 ;
 background-size: cover;

@media screen and (max-width: 768px) {
 padding: 100px 0;
 }
`

export const InfoWrapper = styled.div`
 display: grid;
  z-index: 1;
  height: 700px;
  width: 100%;
  overflow: hidden;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  `

export const InfoRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 
  col1'` : `'col1 col2'` )};

@media screen and (max-width: 768px) {
 grid-template-areas: ${({imgStart}) => (imgStart ? `'col1'
 'col2'`: `'col1 col1' 'col2 col2'`)}
 }
 ` 
export const Column1 = styled.div`
 margin-bottom: 15px; 
  padding: 0 15px;
  grid-area: col1;
  background:"grey";
`

export const Column2 = styled.div`
 margin-bottom: 15px; 
  padding: 0 15px;
  grid-area: col2;
  background:"grey";
  `

export const TextWrapper = styled.div`
 max-width: 540px;
  padding-top: 0;
    padding-bottom: 60px; 
   `

export const TopLine = styled.p`
 color: green;
 font-size: 16px;
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
font-family: 'Encode Sans', sans-serif;

font-family: 'Sacramento', cursive;
color: ${({lightText}) => (lightText ? 'grey' : 
'grey')};

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 20px;
line-height: 24px;
color: ${({darkText}) => (darkText ? 'grey' : "grey")};
font-family: 'Girassol', cursive;

`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
border-radius:10px;
box-shadow:1px 1px 10px 1px #062925;
`

export const Img = styled.img`
width: 100%;
height: 100%;
margin: 0 0 10px 0;
padding-right:0;
border-radius:10px;
`