import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItems.scss';

function MenuItems({ title, listArr }) {
   return (
      <div className="menu__items">
         <h2>{title}</h2>
         {listArr.map((item, index) => (
            <div key={index} className="menu__action">
               <i className={`${item.icon}`}></i>
               <NavLink to={item.to}>{item.action}</NavLink>
            </div>
         ))}
      </div>
   );
}

export default MenuItems;
