import React from 'react'
import Icon2 from '../../images/ban.jpeg'
import Icon1 from '../../images/pexel.jpeg';
import Icon3 from '../../images/neils1.jpeg';
import Icon4 from '../../images/book.jpeg';
import Icon5 from '../../images/hair3.jpeg';
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
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> Winter Blues offers</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>The best service</ServicesH2>
                <ServicesP>the best services in Waterford</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>The best price</ServicesH2>
                <ServicesP>Reasonable price for beginners</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Happy people</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Happy people</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Happy people</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Happy people</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services;
