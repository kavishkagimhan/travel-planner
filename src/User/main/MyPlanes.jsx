import React from 'react'
import Sidebar from '../Sidebar'
import Planes from '../Planes'

const MyPlanes = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Planes/>
        </div>
    </div>
  )
}

export default MyPlanes