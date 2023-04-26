import React from 'react'
import Single from '../assets/single.jpg';
import { AiFillStar } from "react-icons/ai";


const Reviews = () => {
    return (
        <div className='h-auto'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:px-4 mt-14'>
                <div className='flex flex-col w-full p-4 my-4 duration-300 bg-white rounded-lg shadow-xl hover:scale-105 h-[500px]'>
                    <img className='w-20 mx-auto bg-white ' src={Single} alt="" />
                    <h2 className='py-8 text-2xl font-bold text-center'>Bella </h2>
                    <p className='font-thin text-center text-md'>
                        Came across this travel planner website and was pleasantly surprised by
                        how user-friendly and informative it was. The trip planning tools and
                        destination guides made it easy for me to create a customized itinerary
                        that suited my travel needs.
                    </p>
                    <p className='flex items-center justify-center mt-5 text-4xl text-yellow-500'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                </div>
                <div className='flex flex-col w-full p-4 my-4 duration-300 bg-white rounded-lg shadow-xl hover:scale-105'>
                    <img className='w-20 mx-auto bg-white ' src={Single} alt="" />
                    <h2 className='py-8 text-2xl font-bold text-center'>Hannah Smith</h2>
                    <p className='font-thin text-center text-md'>
                    Just wanted to leave a quick note to express my gratitude for this amazing
                     travel planner website. The booking and reservation system was seamless, 
                     and I was able to find great deals on flights and hotels for my entire trip.
                    </p>
                    <p className='flex items-center justify-center mt-5 text-4xl text-yellow-500'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                </div>
                <div className='flex flex-col w-full p-4 my-4 duration-300 bg-white rounded-lg shadow-xl hover:scale-105'>
                    <img className='w-20 mx-auto bg-white ' src={Single} alt="" />
                    <h2 className='py-8 text-2xl font-bold text-center'>Harry Potter </h2>
                    <p className='font-thin text-center text-md'>
                    The booking and reservation system was seamless, and I was able to find great 
                    deals on flights and hotels for my entire trip. The user reviews and ratings 
                    also helped me make informed decisions about where to stay and what to do. 
                    </p>
                    <p className='flex items-center justify-center mt-5 text-4xl text-yellow-500'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews