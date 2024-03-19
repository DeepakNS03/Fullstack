import React from 'react'
import cover from '../../assets/yogaimg.jpg'
import google from '../../assets/google.png';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';




const Login = () => {
  const nav = useNavigate();
  const login = useGoogleLogin({
    onSuccess: codeResponse => {console.log(codeResponse),
    nav('/user/home')}
    // flow: 'auth-code',
  });

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full  flex-col md:flex hidden '>
            <div className='absolute bottom-[30%] left-[10%] flex flex-col space-y-0'>
                <h1 className='text-4xl text-white font-bold my-4 text-[100px]'>Zen Yoga</h1>
                <p className='text-2xl text-white font-semibold py-1 '>LOVE . . LIGHT . . YOGA . .</p>
            </div>
            <img src={cover} className='hidden lg:flex w-full h-full object-cover'/>
        </div>
                  

        <div className='w-11/12 max-w-[500px] mx-auto mt-14  h-11/12   bg-[#E0E0E0] flex flex-col p-10 justify-between items-center rounded-3xl'> 
            <h1 className='text-2xl text-[#060606] font-semibold py-2'>Welcome to Zen Yoga!</h1>

            <div className= 'w-full flex flex-col'>
                <div className='w-full flex flex-col mb-2'>

                <h3 className='text-2xl font-semibold mb-1'>Login</h3>
                <p className='text-sm mb-2'>Please enter your credentials!</p>
                </div>

                <div className='w-full flex flex-col'>
                    <input
                     type="email"
                     placeholder='Email ID*'
                     className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none '/>
                     <input
                     type="Password"
                     placeholder='Password'
                     className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none '/>
                </div>
                   <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                      <input type='checkbox' className='w-4 h-4 mr-2'></input>
                      <p className='text-sm'>Remember me for 30 days</p>
                    </div>
                    <p className='text-sm text-nowrap font-medium cursor-pointer underline underline-offset-2 py-2'>Forget Password?</p>
                   </div>
                  <div className='w-full flex flex-col my-4'>
                     <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>Login</button>
                     
                     {/* <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center'>Register</button> */}
                  </div>

                  <div className='w-full flex items-center justify-center relative py-2'>
                     <div className='w-full h-[1px] bg-black'></div>
                      <p className='text-lg absolute text-black/80 bg-[#E0E0E0]'>or</p>
                  </div>


                   <div  onClick={login} className='w-full text-[#060606] cursor-pointer my-2 font-semibold bg-white border border-black/50 rounded-md p-4 text-center flex items-center justify-center'>       
                   <img src={google} className='h-6 mr-2'/>
                   
                   Login with google
                   </div>
                   
                 </div>

            <div className='w-full flex items-center justify-center'>
                <p className='text-sm font-normal text-[#060606]'>Don't Have a account?<span className='font-semibold underline underline-offset-2 cursor-pointer'><Link to={'/signup'}>Sign Up</Link></span></p>
            </div>
        </div>
        
    </div>
  )
}

export default Login
