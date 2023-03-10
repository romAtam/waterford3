import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Video1 from '../images/lash.mp4';
import { homeObjOne,
         homeObjTwo,
         homeObjThree ,
} from '../components/InfoSection/Data';


const Home = () => {
    const [is0pen, setIs0pen] = useState(false);

    const toggle = () => {
        setIs0pen(!is0pen);
    };

  return (
    <>
      <Sidebar is0pen={is0pen} toggle={toggle}/>
      <Navbar toggle={toggle} /> 
        <HeroSection vido={Video1}/>
       <Services/>  
         <InfoSection {...homeObjThree}/> 
         
            
    
       <InfoSection {...homeObjTwo}/>  
    
    
    
 

      
  
    
   
    <Footer/>

    </>
  );
};

export default Home
