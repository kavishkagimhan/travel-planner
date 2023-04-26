import React from 'react'
import Sidebar from './Sidebar'
import Plan from './Plan'


const Dashboard = () => {
  return (
    <div className='flex h-screen'>
        <div>
            <Sidebar/>
        </div>
        <div className=''>
            <Plan/>
        </div>
    </div>
  )
}

export default Dashboard