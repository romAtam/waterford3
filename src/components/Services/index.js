import React from 'react'
import Icon2 from '../../images/ban.jpeg'
import Icon1 from '../../images/pexel.jpeg';
import Icon3 from '../../images/maki.jpeg';
import Icon4 from '../../images/sofiia.jpeg';
import Icon5 from '../../images/glas.jpeg';
import Icon6 from '../../images/pink.jpeg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElement'
const Services = (props) => {
const n=props.one
  return (
    <ServicesContainer id={props.id}>
        <ServicesH1>{props.name}</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>{n}</ServicesH2>
                <ServicesP>the best services in Waterford</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Mani/Pedi</ServicesH2>
                <ServicesP>Reasonable price </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Facials</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Waxing</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Lashes</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Threading</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services;
