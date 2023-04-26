import React from 'react'
import Sidebar from '../Sidebar'
import Calculator from '../Calculator'

const CalculatorHome = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Calculator/>
        </div>
    </div>
  )
}

export default CalculatorHome