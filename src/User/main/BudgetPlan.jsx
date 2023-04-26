import React from 'react'
import Sidebar from '../Sidebar'
import Plan from '../Plan'

const BudgetPlan = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className=''>
            <Plan/>
        </div>
    </div>
  )
}

export default BudgetPlan