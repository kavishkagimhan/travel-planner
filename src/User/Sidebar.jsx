import React from 'react'
import { BsBookHalf } from "react-icons/bs";
import { BiQrScan } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiMedicines } from "react-icons/gi";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='h-[100vh] text-blue-500 mt-[-25px] shadow-xl bg-[#eff6ff] border-r-2 border-blue-100 '>
            <Link to='/dashboard'><div className='px-6 py-4 mt-6 bg-blue-400'>
                <h1 className='text-2xl font-semibold text-white bg-blue-400'>Travel Planner</h1>
            </div>
            </Link>
            <div className='flex items-center justify-between gap-4 px-6 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white'>
                <h2 className='mt-6 text-xl'><Link to='/dashboard/plan'>Budjet Plan</Link></h2>
                <p className='ml-10 '><BsBookHalf /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white'>
                <h2 className='mt-6 text-xl'><Link to='/dashboard/myplans'>My Planes</Link></h2>
                <p className='ml-10 '><AiOutlineUserAdd /></p>

            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white'>
                <h2 className='mt-6 text-xl'><Link to='/dashboard/calander'>Calendar</Link></h2>
                <p className='ml-10 '><BiQrScan /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white'>
                <h2 className='mt-6 text-xl'><Link to='/dashboard/calculator'>Calculaor</Link></h2>
                <p className='ml-10 '><GiMedicines /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white'>
                <h2 className='mt-6 text-xl'><Link to='https://www.oretatravels.com/'>Destination</Link></h2>
                <p className='ml-10 '><FaHospitalAlt /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white'>
                <h2 className='mt-6 text-xl'><Link to='/dashboard/contact'>Contact</Link></h2>
                <p className='ml-10 '><GiMedicines /></p>
            </div>

        </div>
    )
}

export default Sidebar