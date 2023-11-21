import React from 'react';
import { Outlet } from 'react-router-dom';
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
                        icon: 'fa-solid fa-square-poll-vertical',
                        to: '/',
                     },
                  ]}
               ></MenuItems>
               <MenuItems
                  title="List"
                  listArr={[
                     {
                        action: 'Users',
                        icon: 'fa-regular fa-user',
                        to: '/user',
                     },
                     {
                        action: 'Hotels',
                        icon: 'fa-solid fa-hotel',
                        to: '/hotel',
                     },
                     {
                        action: 'Rooms',
                        icon: 'fa-solid fa-store',
                        to: '/room',
                     },
                     {
                        action: 'Transactions',
                        icon: 'fa-solid fa-truck',
                        to: '/transaction',
                     },
                  ]}
               ></MenuItems>
               <MenuItems
                  title="New"
                  listArr={[
                     {
                        action: 'NewHotel',
                        icon: 'fa-solid fa-hotel',
                        to: '/newHotel',
                     },
                     {
                        action: 'NewRoom',
                        icon: 'fa-solid fa-store',
                        to: '/newRoom',
                     },
                  ]}
               ></MenuItems>
               <MenuItems
                  title="Users"
                  listArr={[
                     {
                        action: 'Logout',
                        icon: 'fa-solid fa-arrow-right-from-bracket',
                        to: '/',
                     },
                  ]}
               ></MenuItems>
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
