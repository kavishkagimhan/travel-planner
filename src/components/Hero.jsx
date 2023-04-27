import React from 'react';
import background from '../assets/hero.jpg'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    // style={{ backgroundImage: `url(${background})` }}
    <div className='relative h-screen text-white bg-black bg-center bg-no-repeat bg-cover -z-10' style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 -z-20"></div>
      <div className='flex items-center justify-center h-[70vh] text-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold'>Wanderlust Planner. Your Ultimate Travel Companion</h1>
          <p className='mt-4 font-thin text-md'>Plan your dream vacation with ease using Wanderlust Planner,
            the ultimate travel companion website.</p>
            <div className='flex justify-between bg-white max-w-[500px] mx-auto text-gray-400 px-4 py-2 mt-4 items-center rounded-md'>
              <p className='font-thin'>What Whould You Like</p>
              <Link to='/dashboard'><button className='px-4 py-2 text-white bg-blue-400 border rounded-md cursor-pointer hover:bg-transparent hover:border-blue-400 hover:text-blue-400'>Start Planing</button></Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero