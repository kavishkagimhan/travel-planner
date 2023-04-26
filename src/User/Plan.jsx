import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import planeDataService from '../Services/PlaneService';

ChartJS.register(ArcElement, Tooltip, Legend);



const Plan = () => {

    const [pname, setPname] = useState('');
    const [budjet, setBudget] = useState();
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [transport, setTransport] = useState();
    const [food, setFood] = useState();
    const [accamodation, setAccamodation] = useState();
    const [balance, setBalence] = useState();
    const [tickets, setTickets] = useState();



    const submitButton = async (e) => {
        await planeDataService.addPlane({
            pname, date1, date2, budjet, transport, tickets, food, accamodation, balance
        });
        toast.success('Added Success !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }




    const calculate = () => {
        setBalence(budjet - transport - food - accamodation - tickets)

    }

    const reset = () => {
        setBudget('')
        setDate1('')
        setBalence('')
        setFood('')
        setPname('')
        setAccamodation('')
        setTickets('')
        setTransport('')

    }


    const data = {
        labels: ['Transport', 'Food', 'Accamodation', 'Tickets', 'Balance'],
        datasets: [
            {
                label: 'budjet',
                data: [transport, food, accamodation, tickets, balance],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',

                ],
                borderWidth: 2,
            },
        ],
    };






    return (
        <div className='flex w-[1280px]  bg-[#eff6ff] overflow-hidden '>
            <div className='px-4 py-6 w-[1280px]'>
                <h1 className='py-4 text-3xl font-normal border-b-2 border-blue-200'>Plan Your Trip Budjet</h1>
                <div className='flex  w-[1000PX] gap-4 bg-gray-100 p-6 mt-4 rounded-lg shadow-xl justify-center mx-auto'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">Enter Your Trip Name</label>
                            <input className='w-[40%] h-[40px] text-md p-2 focus-within:outline-none' type="text" name="budjet" id=""
                                pname="pname"
                                onChange={(e) => setPname(e.target.value)}
                                value={pname}
                            />
                        </div>
                        <div className='flex items-center gap-[100px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">Date From/To</label>
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="date" name="budjet" id=""
                                date1="date1"
                                onChange={(e) => setDate1(e.target.value)}
                                value={date1}
                            />
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="date" name="budjet" id=""
                                date2="date2"
                                onChange={(e) => setDate2(e.target.value)}
                                value={date2}
                            />
                        </div>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">Amount you Expect to spend</label>
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="number" name="budjet" id=""
                                budjet="budjet"
                                onChange={(e) => setBudget(e.target.value)}
                                value={budjet}
                            />
                        </div>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">How Much For Transport </label>
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="number" name="budjet" id=""
                                transport="transport"
                                onChange={(e) => setTransport(e.target.value)}
                                value={transport}
                            />
                        </div>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">How Much For Tickets </label>
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="number" name="budjet" id=""
                                tickets="tickets"
                                onChange={(e) => setTickets(e.target.value)}
                                value={tickets}
                            />
                        </div>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">How Much For Food</label>
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="number" name="budjet" id=""
                                food="food"
                                onChange={(e) => setFood(e.target.value)}
                                value={food}
                            />
                        </div>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">How Much For Accommodation</label>
                            <input className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none' type="number" name="budjet" id=""
                                accamodation="accamodation"
                                onChange={(e) => setAccamodation(e.target.value)}
                                value={accamodation}
                            />
                        </div>
                        <div className='flex items-center gap-[150px] justify-between'>
                            <label className='text-xl font-medium' htmlFor="budget">Balance</label>
                            <p className='w-[20%] h-[40px] text-md p-2 focus-within:outline-none'>{balance}</p>
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button className='px-4 py-2 text-white bg-blue-500 border hover:bg-transparent hover:text-blue-500 hover:border-blue-500' onClick={calculate}>Calculate</button>
                            <button className='px-4 py-2 text-white bg-red-500 border hover:bg-transparent hover:text-red-500 hover:border-red-500' onClick={reset}>Reset</button>
                            <button className='px-4 py-2 text-white bg-green-500 border hover:bg-transparent hover:text-green-500 hover:border-green-500' onClick={submitButton}>Save</button>
                        </div>
                    </div>

                    <div className='w-[500px] h-[400px] bg-white'>
                        < Doughnut data={data} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Plan