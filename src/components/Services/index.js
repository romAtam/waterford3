import React from 'react'
import Icon2 from '../../images/slash.jpeg'
import Icon1 from '../../images/brows.jpeg';
import Icon3 from '../../images/skins.jpeg';
import Icon4 from '../../images/swax.webp';
import Icon5 from '../../images/snail.jpeg';
import Icon6 from '../../images/make-up.jpg';
import Icon7 from '../../images/malegrooming.jpeg';
import Icon8 from '../../images/stan.jpeg';
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
        <ServicesH1>our services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>brow service</ServicesH2>
                <ServicesP>the best services in Waterford</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>eyes</ServicesH2>
                <ServicesP>Reasonable price </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>skin</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Waxing</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>nails</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon8}/>
                <ServicesH2>tans</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>make-up</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon7}/>
                <ServicesH2>male grooming</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services;
