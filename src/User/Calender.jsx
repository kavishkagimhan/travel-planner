import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = () => {

    

    const [value, onChange] = useState(new Date());

    return (
        <div className='flex justify-center w-screen h-screen p-4 bg-white rounded-md shadow-lg hover:shadow-2xl'>
            <div className='bg-gray-200 rounded-md shadow-lg hover:shadow-2xl h-1/2' >
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default Calender