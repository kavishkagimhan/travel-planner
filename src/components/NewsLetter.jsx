import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full px-4 py-16 text-white bg-black'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='ml-4 lg:col-span-2'>
              <h1 className='py-2 text-2xl font-bold md:text-4xl sm:text-3xl'>Want tips & trics to optimise your flow?</h1>
              <p className=''>Sign up our newsletter and stay up to date. </p>  
            </div>
            <div className='my-4'>
                <div className='flex flex-col items-center justify-between w-full sm:flex-row'>
                    <input className='flex w-full p-3 text-black rounded-md' type='email' placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 mx-auto text-black py-3 '>Notify Me</button>
                </div>
                <p>We care bout the protection of your data. Read our <span className='text-[#00df9a] cursor-pointer hover:underline'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter