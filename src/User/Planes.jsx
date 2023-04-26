import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import planeDataService from '../Services/PlaneService';


const Planes = () => {

  const [planes, setPlanes] = useState([]);

  
  useEffect(() => {
    getPlanes();
  }, []);


  


  const getPlanes = async () => {
    const data = await planeDataService.getAllPlanes();
    setPlanes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {

    await planeDataService.deleteplane(id).then(() => {
      alert("Are you sure you want to delete");
      toast.success('Delete Success !', {
        position: toast.POSITION.TOP_RIGHT
      });
      getPlanes();
    })
      .catch((err) => {
        console.log(err);
      })

  };

  return (
    <div>
      <table class="w-[1000px] p-1 ml-14 mt-14">
        <thead className='items-center justify-between p-1 bg-blue-600'>
          <tr className='p-1' >
            <th className='p-4 text-2xl text-white'>Trip Name</th>
            <th className='p-4 text-2xl text-white'>Start Date</th>
            <th className='p-4 text-2xl text-white'>End Date</th>
            <th className='p-4 text-2xl text-white'>Budget</th>
            <th className='p-4 text-2xl text-white'>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {planes.map((doc, id, index) => {
            return (
              <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-green-500 hover:bg-gray-400'>
                <td className='px-4 py-2 text-center'>{doc.pname}</td>
                <td className='px-4 py-2 text-center'>{doc.date1}</td>
                <td className='px-4 py-2 text-center'>{doc.date2}</td>
                <td className='px-4 py-2 text-center'>{doc.budjet}</td>
                <td className='px-4 py-2 text-center'>
                  <div className='flex gap-2 ml-8 text-xl cursor-pointer'>
                    <AiFillDelete className='hover:bg-blue-500' onClick={(e) => deleteHandler(doc.id)} />
                    <AiFillEdit className='hover:bg-blue-500' onClick={(e) => deleteHandler(doc.id)} />
                  </div>

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Planes