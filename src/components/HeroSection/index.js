import React, {useState} from 'react';
// import { Button } from 'react-scroll';
import Video from '../../videos/blue.mp4';
import { Button } from '../ButtonElement';

import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward,
    Shild

 } from './HeroElements';

const HeroSection = ({vido}) => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)

    }

  return (
    <HeroContainer id="home">
      {/* <Shild ></Shild> */}
      <HeroBg>
        <VideoBg autoPlay loop muted src= {vido} type='video/mp4'/>
        
      </HeroBg>
      <HeroContent>
        <HeroH1>The Brow Lounge</HeroH1>
        <HeroP>
        The Brow Lounge is a new chic Beauty Salon located behind the Crystal Lesuire Centre
        </HeroP>
        <HeroBtnWrapper>
            <Button 
            to='signup' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
                Get started {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
