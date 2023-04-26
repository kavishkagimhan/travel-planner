import React from 'react'
import Sidebar from '../Sidebar'
import ContactUs from '../../pages/ContactUs'

const Contact = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='w-[1280px]'>
            <ContactUs/>
        </div>
    </div>
  )
}

export default Contact