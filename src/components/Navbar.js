import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Navbar() {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="bg-white mx-auto flex items-center justify-between h-20 text-black max-w-[1340px] px-4 z-60 ">
            <Link to='/'> <h1 className='w-full text-3xl font-bold cursor-pointer'>TRAVEL<span className='text-blue-500'>PLANNER</span></h1></Link>
            <ul className='hidden gap-6 font-sans uppercase md:flex'>
                <li className='cursor-pointer hover:text-blue-500'><Link to='howworks'>How it works</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link to='/dashboard'>start Planning</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link to='https://www.oretatravels.com/'>Blog</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link to='reviews'>Reviews</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link to='contactus'>Contact</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link to='/conditions'>Terms and Conditions</Link></li>
                <div className='flex items-center gap-4'>
                <button className='px-4 py-2 text-white uppercase bg-blue-400 border rounded-md hover:bg-transparent hover:text-blue-400'><Link to='/login'>Login</Link></button>
                <button className='px-4 py-2 text-blue-400 uppercase border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white'><Link to='/signup'>SignUp</Link></button>
            </div>
            </ul>
           
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-end-out duration-50 text-white'}>
            <Link to='/'> <h1 className='w-full text-3xl font-bold text-white cursor-pointer'>TRAVEL<span className='text-blue-500'>PLANNER</span></h1></Link>
                <ul className='flex flex-col gap-4 p-4 pt-24 text-white uppercase'>
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