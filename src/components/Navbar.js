import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

function Navbar() {

    const [nav, setNav] = useState(true);
    
    const handleNav = () => {
        setNav(!nav);
    }
    
    return (
        <div className="bg-black mx-auto flex items-center justify-between h-24 text-white max-w-[1240px] px-4 ">
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Company</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
            </div>
            <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-end-out duration-500'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <ul className='p-4 pt-24 uppercase '>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar