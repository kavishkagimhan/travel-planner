import React from 'react';
import Analy from '../assets/Ana.png'

function Analytics() {
    return (
        <div className='w-full px-4 py-16 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px0 mx-auto my-4] mr-5 rounded-md' src={Analy} alt="" />
                <div className='flex flex-col justify-center ml-6'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='py-2 text-2xl font-bold md:4xl sm:text-3xl'>Manage Data Analytics Centrally</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia aliquam ex nemo error quos quasi, sunt nesciunt nam magnam
                        id delectus natus illum cumque maiores accusamus voluptatum labore,
                        unde velit.</p>
                    <button className='bg-black w-[200px] md:mx-0 sm:align-middle rounded-md font-medium my-6 mx-auto text-[#00df9a] py-3 '>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Analytics