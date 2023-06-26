import React from 'react'
import Item from "./Item"
import LogImage from "../../images/browlogo.png"
import { NavLogo } from '../Navbar/NavbarElements';
import {Navi,Menu,Cont,ArrowLeft} from  "./PricesElements"
import {Logo} from "../Navbar/NavbarElements"
import { animateScroll as scroll } from 'react-scroll';
const data=[{
    name:"brow services",
    items:[['brow wax/thread',13],['brow tint & tidy',25],['hd brows',28],['brow lamination',38],['henna brows',38],['eyebrow & eyelash tint combo',30]],

},
{
    name:"eyes",
    items:[['eyelash tint',15],['eyelash perming',45],['eyelash 3d-5d volume extentions',"55/85"],['lash lift & lamination/henna combo',73]]
},
{
    name:"skin",
    items:[['eyelash tint',15],['eyelash perming',45],['eyelash 3d-5d volume extentions',"55/85"],['lash lift & lamination/henna combo',73]]
},
{
  name:"waxing",
  items:[['LIP',13],['CHIN',13],['brow wax',"15"],['full leg',38],['full leg & bikini',38],['1/2 leg',33],['3/4 leg',23],['underarm',23],['forearm',48],['hollywood',48],['brazilian',43], ['californian',33]]
},
{
  name:"nails",
  items:[['shellac manicure',28],['shellac pedicure',28],['shellac',"28"]]
},
{
  name:"tans",
  items:[['full bidy',28],['half body',22],['basecoat over night spray',35],['top coat',35],['basecoat &  top coat',35]]
},
{
  name:"make - up",
  items:[['bridal make - up',43],['regular make - up',35],['make up with lashes',43],['make up lesson',43]]
},
{
  name:"male crooming",
  items:[['black wax',33],['chest wax',38],['brow trim',15],['nasal hair',11]]
},

]
const Prices = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
   
        <Cont>
 
        <Navi>
              <NavLogo to='/' onClick={toggleHome}><ArrowLeft/><Logo src={LogImage} alt="logo"/></NavLogo>
        </Navi>
        
          <Menu>
            {data.map(item=>  <Item key={item.name} {...item}/>  )}
     
  
           </Menu>
    </Cont>

  
  )
}

export default Prices
