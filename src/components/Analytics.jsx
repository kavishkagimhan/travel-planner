import React from 'react';
import Analy from '../assets/about.png'
import { Link } from 'react-router-dom';

function Analytics() {
    return (
        <div className='w-full px-4 py-16 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px0 mx-auto my-4] mr-5 rounded-md' src={Analy} alt="" />
                <div className='flex flex-col justify-center ml-6'>
                    <p className='text-lg font-bold text-blue-400 '>About Us</p>
                    <h1 className='py-2 text-2xl font-bold md:4xl sm:text-3xl'>Your Personalized Budgeting Tool</h1>
                    <p className=''>At Travel Budget Planner, we believe that travel shouldn't break the bank. 
                    Our website is dedicated to helping travelers create a personalized budget for their trips,
                     from flights and accommodations to food and activities</p>
                    <button className='bg-blue-400 w-[200px] md:mx-0 sm:align-middle rounded-md font-medium my-6 mx-auto text-white py-3 '><Link to='/dashboard'>Get Started</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Analytics