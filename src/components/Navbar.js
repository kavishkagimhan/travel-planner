import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='w-screen bg-white shadow-md'>
            <div className='flex items-center justify-between h-12 bg-white text-uppercase max-w-[1340px] mx-auto py-10'>
                <h1 className='text-3xl font-bold text-black cursor-auto font-inter'><Link to='/'>TRAVEL<span className='text-blue-500'>PLANNER</span></Link></h1>
                <ul className='flex items-start gap-6 px-4 py-2 text-sm font-semibold text-black uppercase'>
                    <li className='cursor-pointer hover:text-blue-500'><Link to='howworks'>How it works</Link></li>
                    <li className='cursor-pointer hover:text-blue-500'><Link to='/dashboard'>start Planning</Link></li>
                    <li className='cursor-pointer hover:text-blue-500'><Link to='https://www.oretatravels.com/'>Blog</Link></li>
                    <li className='cursor-pointer hover:text-blue-500'><Link to='reviews'>Reviews</Link></li>
                    <li className='cursor-pointer hover:text-blue-500'><Link to='contactus'>Contact</Link></li>
                    <li className='cursor-pointer hover:text-blue-500'><Link to='/conditions'>Terms and Conditions</Link></li>
                </ul>
                <div className='flex items-center gap-4'>
                <button className='px-4 py-2 text-white uppercase bg-blue-400 border rounded-md hover:bg-transparent hover:text-blue-400'><Link to='/login'>Login</Link></button>
                    <button className='px-4 py-2 text-blue-400 uppercase border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white'><Link to='/signup'>SignUp</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar