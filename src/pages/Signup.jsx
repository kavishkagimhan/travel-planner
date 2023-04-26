import React, {useState} from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSignin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/login")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
  
    }
  


    
  return (
    <div>
        <div className='relative top-0 z-0 flex items-center justify-center h-screen bg-center bg-cover bg-none' style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80")`
    }}>
      <div class="absolute top-0 left-0 w-full h-screen bg-black opacity-60 -z-20"></div>
      <div className='flex items-center justify-start w-1/2 mx-auto -mt-10 bg-gray-300 rounded-md h-1/2'>
        <div className='w-[50%] ml-10'>
          <h2 className='mb-4 text-4xl font-semibold text-black uppercase'>SignUp</h2>
          <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
            <input className='h-[100%] w-[90%] ml-1 rounded-lg focus-within:outline-none' type="text" placeholder='Enter Your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='text-xl'><AiOutlineMail /></p>
          </div>
          <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
            <input className='h-[100%] w-[90%] ml-1 rounded-lg focus-within:outline-none' type="password" placeholder='Enter Your Password'
               onChange={(e) => setPassword(e.target.value)}
            />
            <p className='text-xl'><BsKey /></p>
          </div>
          <button className='bg-blue-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'onClick={onSignin}>
            Signup
          </button>
          <p className='text-lg font-thin'>you don't have an account</p>SignUp
        </div>
        <div className='mt-12 ml-6 rounded-lg h-[200px]'>
          <img className='w-[80%]' src='https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup