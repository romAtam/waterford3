import React from 'react'
import{MenuItem,ItemWraper,Param,MenuName,Price}from "./PricesElements";

const Item = ({name,items}) => {

  return (
    <MenuItem>  
                <MenuName>{name}</MenuName>
                {items.map((item, index) =>(<ItemWraper key={item[0]}>
                  <Param>{item[0]}</Param>
                <div><Price>{item[1]} &euro;</Price></div>
            </ItemWraper>))}
         
         
              
            </MenuItem>
  )
}

export default Item
