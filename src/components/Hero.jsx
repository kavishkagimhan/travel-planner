import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white bg-black '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col text-center justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA</p>
            <h1 className='text-4xl font-bold md:text-7xl sm:text-6xl md:py-6'>Grow with data.</h1>
            <div className='flex items-center justify-center'>
                <p className='py-4 text-xl font-bold md:text-5xl sm:text-4xl'>Fast, dlexiblevfinancing for</p>
                <Typed className='pl-2 text-xl font-bold md:text-5xl sm:text-4xl' strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={139} loop />
            </div>
            <div className=''>
                <p className='text-xl font-bold text-gray-500 md:text-2xl'>Monitor your data analytics to increase revenue for BTB,BTC & SAAS platforms..</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3 '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero