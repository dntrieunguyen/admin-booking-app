import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DefaultLayout.scss';
import MenuItems from '../components/MenuItems/MenuItems';

function DefaultLayout() {
   return (
      <section className="adContainer">
         <aside>
            <h1>Admin Page</h1>
            <hr />

            <div className="menu">
               <MenuItems
                  title="Main"
                  listArr={[
                     {
                        action: 'DashBoard',
                        icon: 'icon',
                        to: '/user',
                     },
                  ]}
               ></MenuItems>
               <MenuItems
                  title="List"
                  listArr={[
                     {
                        action: 'Users',
                        icon: 'icon',
                        to: '/user',
                     },
                     {
                        action: 'Hotels',
                        icon: 'icon',
                        to: '/hotel',
                     },
                     {
                        action: 'Rooms',
                        icon: 'icon',
                        to: '/room',
                     },
                     {
                        action: 'Transactions',
                        icon: 'icon',
                        to: '/transaction',
                     },
                  ]}
               ></MenuItems>

               {/* <div className="menu__items">
                  <h2>Main</h2>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>DashBoard</NavLink>
                  </div>
               </div>
               <div className="menu__items">
                  <h2>List</h2>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>Users</NavLink>
                  </div>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>Hotels</NavLink>
                  </div>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>Rooms</NavLink>
                  </div>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>Transaction</NavLink>
                  </div>
               </div>
               <div className="menu__items">
                  <h2>New</h2>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>New Hotel</NavLink>
                  </div>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>New Room</NavLink>
                  </div>
               </div>
               <div className="menu__items">
                  <h2>User</h2>
                  <div className="menu__action">
                     <i>icon</i>
                     <NavLink>Log out</NavLink>
                  </div>
               </div> */}
            </div>
         </aside>
         <main>
            <div className="header__line"></div> <hr />
            <Outlet></Outlet>
         </main>
      </section>
   );
}

export default DefaultLayout;
