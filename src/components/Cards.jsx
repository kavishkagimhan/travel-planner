import React from 'react';
import Single from '../assets/single.jpg';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

function Cards() {
    return (
        <div className='w-full py-[10rem] px-4 bg-white '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:px-4'>
                <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="" />
                    <h2 className='py-8 text-2xl font-bold text-center'>Single User</h2>
                    <p className='text-4xl font-bold text-center'>$149</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b '>500 GB Storage</p>
                        <p className='py-2 mx-8 mt-8 border '>1 Granted User</p>
                        <p className='py-2 mx-8 mt-8 border '>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3 '>Start trail</button>
                </div>
                <div className='flex flex-col w-full p-4 my-4 duration-300 bg-gray-100 rounded-lg shadow-xl hover:scale-105'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-gray-100 ' src={Double} alt="" />
                    <h2 className='py-8 text-2xl font-bold text-center'>Double User</h2>
                    <p className='text-4xl font-bold text-center'>$160</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b '>750 GB Storage</p>
                        <p className='py-2 mx-8 mt-8 border '>1 Granted User</p>
                        <p className='py-2 mx-8 mt-8 border '>Send up to 3 GB</p>
                    </div>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto bg-black py-3 '>Start trail</button>
                </div>
                <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Triple} alt="" />
                    <h2 className='py-8 text-2xl font-bold text-center'>Triple User</h2>
                    <p className='text-4xl font-bold text-center'>$200</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b '>1000 GB Storage</p>
                        <p className='py-2 mx-8 mt-8 border '>2 Granted User</p>
                        <p className='py-2 mx-8 mt-8 border '>Send up to 5 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3 '>Start trail</button>
                </div>
            </div>
        </div>
    )
}

export default Cards