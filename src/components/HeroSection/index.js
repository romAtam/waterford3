import React, {useState} from 'react';
// import { Button } from 'react-scroll';

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
  <HeroP>PAINLESS THREADING WITH THERAPISTS SPECIALISING IN NATURAL BEAUTY CARE</HeroP>
     <HeroBtnWrapper>
            <Button 
            to='/treatment' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth="true"
            duration={500} 
            spy="true" 
            exact='true' 
            offse={-80}
            >
          treatment {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>    
       
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
