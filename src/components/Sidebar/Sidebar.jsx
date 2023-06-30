// import React, { useEffect } from 'react'
import './Sidebar.css'
import { useState } from 'react';
import { Route,Routes} from 'react-router-dom';

import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import MainDash from '../MainDash/MainDash';
import Complaints from '../Complaints/Complaints';
import Profile from '../Profile/Profile';



const Sidebar = () => {

      const[selected,setSelected] = useState(0);
      // useEffect(()=>{
      //   console.log("changed ")
      //   setSelected()
      // },[selected]);
      // function changecontent(index){
      //   console.log(index);
      // }

  return (
    <>
      <div className='Sidebar'>
        {/* logo */}
          <div className='logo'>
            <img src='https://tinyurl.com/mrfix-logo' alt='img-error'/>
            <span>
                Mr.Fix
            </span>
          </div>

          {/* menu */}
          <div className='menu'>
              {SidebarData.map((item,index)=>{
                return(
                  <div className={selected===index?'menuItem active':'menuItem'}
                  key={index}
                  onClick={()=>setSelected(index)}>
                        <item.icon/>
                        <span>
                          {item.heading}
                        </span>
                  </div>
                )
              })}
              <div className='menuItem'>
                <UilSignOutAlt/>
              </div>
          </div>
    </div>
            <Routes>
              <Route path="/dashboard" element={<MainDash/>}/>
              <Route path="/complaints" element={<Complaints/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
  
    </>
  )
}

export default Sidebar;