import React, { useState, useEffect } from 'react'
// 
import SideBarStyle from './SideBar.module.css'
// 
import logo from './../../../Resources/imgs/omag-systems.png'
// 
import menuOptions from './../../Data/SideBarMenuOptions.json'

function SideBar() {
   const [sideBarStyle, setSideBarStyle] = useState('210px');
   // let sideBarStyle = 'SideBar';

   const SideBarToggle = () => {
      // console.log('Sidebar')
      setSideBarStyle(initState => {
         return initState === '40px'? '210px' : '40px';
      })
   }

   // 
   useEffect(()=>{

   }, [menuOptions])

   return (
      <div className='SideBar' style={{'width':sideBarStyle}}>
         <div className={SideBarStyle.SideBarToggler} onClick={()=>SideBarToggle()}>
            <div></div>
            <div></div>
            <div></div>
         </div>

         <div className={SideBarStyle.SideBarContentTitle}>
            <div>
               <div>
                  <img src={logo} alt='app logo'/>
                  <div>omag</div>
               </div>
               <div>
                  systems
               </div>
            </div>
         </div>

         <div className={SideBarStyle.SideBarContentBody}>
            <div className={SideBarStyle.MenuContainer}>
               <SideBarMenuHead sectionHeaders={menuOptions} />
            </div>
         </div>
      </div>
   )
}

const SideBarMenuHead = ({sectionHeaders}) => {
   const menuHeads = [...Object.keys(sectionHeaders)]

   return (
      <>
         {
            menuHeads.map((menuHeader) => {
               return(
                  <div className='' key={menuHeader}>
                     <div 
                        key={menuHeader + 'Head'} 
                        className={SideBarStyle.MenuHeader}>
                        {menuHeader}
                     </div>

                     <div
                        key={menuHeader + 'Body'} 
                        className={SideBarStyle.MenuBody}>
                        {
                           sectionHeaders[menuHeader].map((option, index) => {
                              return (
                                 <SideBarMenu
                                    key={index}
                                    data={option} />
                              )
                           })
                        }
                     </div>
                  </div>
               )
            })
         }
      </>
   )
}

// const SideBarMenu = ({optionData, name}) => {
// const SideBarMenu = ({title, icon, link}) => {
const SideBarMenu = ({data}) =>  {
   const {title, icon, link} = data

   return (
      <div className={SideBarStyle.MenuList}>
         <span title={title}>
            <i className="material-icons">{icon}</i>
         </span>
         <span>{title}</span>
      </div>
   )
}

export default SideBar