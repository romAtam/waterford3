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
  <HeroH1>prices</HeroH1>
     <HeroBtnWrapper>
            <Button 
            to='/signin' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
           facials {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>    
         <HeroBtnWrapper>
            <Button 
            to='/signin' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
            threading {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>    
         <HeroBtnWrapper>
            <Button 
            to='/signin' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
              waxing {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>   
      <HeroBtnWrapper>
            <Button 
            to='/signin' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
          lashes {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>
        <HeroBtnWrapper>
            <Button 
            to='/signin' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
               brows {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>
        <HeroBtnWrapper>
            <Button 
            to='/signin' onMouseEnter = {onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offse={-80}
            >
               mani/pedi{hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>
      
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
