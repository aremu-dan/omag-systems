import React from 'react'
// 
import SideBarStyle from './SideBar.module.css'

function SideBar() {
   return (
      <div className='SideBar'>
         <div className={SideBarStyle.SideBarContentTitle}>
            Sidebar Title
         </div>
         <div className={SideBarStyle.SideBarContentBody}>
            Sidebar Body
         </div>
      </div>
   )
}

export default SideBar