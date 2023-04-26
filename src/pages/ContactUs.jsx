import React from 'react'

const ContactUs = () => {
    return (
        <div className='relative top-0 z-0 flex items-center justify-center h-screen bg-center bg-cover bg-none' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80")`
        }}>
            <div class="absolute top-0 left-0 w-full h-screen bg-black opacity-10 -z-20"></div>
            <div className=' ml-[60px] bg-gray-200 p-8 -mt-10 rounded-md'>
            <h2 className='mb-4 text-5xl font-semibold text-black'>Contact Us</h2>
            <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Name' />
            </div>
            <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Email' />
            </div>
            <div className='w-[350px] h-[60px] bg-white items-center mt-4 rounded-lg flex'>
                {/* <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Message' /> */}
                <textarea className='h-[100%] w-[90%] ml-1 rounded-lg' name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
            </div>
            <button className='bg-blue-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'>
                Submit
            </button>
        </div>
        </div>
    )
}

export default ContactUs