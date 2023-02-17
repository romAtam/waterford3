import styled from 'styled-components'


export const ServicesContainer = styled.div`
height: 1500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FFE1E1 ;
background-size: cover;
box-shadow: 1px 10px 10px 1px rgba(0,0,0,1);
scroll-behavior: smooth;
 @media screen and (max-width: 768px){
    height: 2500px;
  

}
@media screen and (max-width: 480px){
    height: 1950px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background: #062925;

box-shadow: 2px 4px 10px 4px grey;
display: flex;
//border:1px solid black;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
//box-shadow: 0 1px 3px rgba(0,0,0,0,2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 160px;
width: 210px;
margin-bottom: 10px;
border-radius:18px;
box-shadow: 0px 1px 4px 1px grey;
transition:all 0.8s ease-in-out;
&:hover{
    box-shadow: 0px 3px 20px 1px RGB(245,179,188);
}
`;

export const ServicesH1 = styled.h1`
font-size: 3rem;
color: grey;
margin-bottom: 64px;
font-family: 'Encode Sans', sans-serif;

font-family: 'Girassol', cursive;
@media screen and (max-width: 480px){
    font-size: 2rem;
}

`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color:grey;
text-shadow:-1px 1px 3px black;

font-family: 'Girassol', cursive;
`
export const ServicesP = styled.p`
font-size:1rem;
text-align: center;
color:wheat;
text-shadow:-1px 10px 3px black;
font-family: 'Girassol', cursive;
`;