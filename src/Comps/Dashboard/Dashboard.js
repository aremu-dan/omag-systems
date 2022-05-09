import React from 'react'
// 
import './Dashboard.css'
// 
import SideBar from './SideBar/SideBar'
import DashboardContents from './DashboardContents/DashboardContents'

function Dashboard() {
  return (
    <div className='Dashboard'>
      {/*  */}
      <SideBar />
      {/*  */}
      <DashboardContents />
    </div>
  )
}

export default Dashboard