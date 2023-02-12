import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard";
import Navbar from "./navbar";

const uniqueList = [...new Set(Menu.map((currElem)=>{
  return currElem.category;
})),
"All",
];
console.log(uniqueList);


  const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);
  const filterItem = (category)=>{
    if(category === "All")
    {
      return setMenuData(Menu);
    }
  const updatedList = Menu.filter((currElem) =>{
   return currElem.category === category;
  });
  setMenuData(updatedList);
  };
  return (
   <>
   <Navbar filterItem={filterItem} menuList={menuList} />
   <MenuCard menuData={menuData}/>
  
   </>
  );
};

export default Resturant;
