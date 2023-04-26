import React from 'react'
import Sidebar from '../Sidebar'
import Calender from '../Calender'

const CalenderPage = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Calender/>
        </div>
    </div>
  )
}

export default CalenderPage