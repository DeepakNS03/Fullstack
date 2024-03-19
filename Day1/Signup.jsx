import React from 'react'
import co_img from '../../assets/img1.jpg';
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const nav = useNavigate();
    const login = useGoogleLogin({
        onSuccess: codeResponse => {console.log(codeResponse),
            nav('/home')}
            
      });
  return (
    <div className='w-full h-screen flex items-start'>

        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute bottom-[20%] left-[5%] flex flex-col space-y-0'>
                <h1 className='text-4xl text-white font-bold my-4 text-[90px] text-nowrap'>Train your soul</h1>
                <p className='text-base text-white font-semibold py-5 m-4'>Start for free and get attractive offers from the community</p>
            </div>
            <img src={co_img} className='w-full h-full object-cover'/>
        </div>

        <div className='w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between items-center'> 
            <h1 className='text-xl text-[#060606] font-semibold text-[30px] -mt-10'>Welcome to ZenYoga! </h1>

            <div className= 'w-full flex flex-col max-w-[450px]'>
                <div className='w-full flex flex-col mb-2'>

                <h3 className='text-2xl font-semibold mb-2 mt-10'>Signup</h3>
                <p className='text-base mb-2'>Please enter your details</p>
                </div>

                <div className='w-full flex flex-col'>
                    <input
                     type="name"
                     placeholder='First Name *'
                     className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '/>

                    <input
                     type="name"
                     placeholder='Last Name'
                     className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '/>

                    <input
                     type="email"
                     placeholder='Email ID *'
                     className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '/>

                    <input
                     type="password"
                     placeholder='Password *'
                     className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '/>

                    <input
                     type="password"
                     placeholder=' Confirm Password'
                     className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '/>

                </div>

                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" className='w-4 h-4 mr-2 cursor-pointer'/>
                        <p className='text-sm'>I agree to the terms and conditions</p>
                    </div>
                    <p className='text-sm text-nowrap font-medium cursor-pointer underline underline-offset-2'><Link to={'/terms'}>Terms and conditions*</Link></p>
                </div>

                <div className='w-full flex flex-col'>
                    <button className='w-full text-white my-4 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>

                            Sign Up
                    </button>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className='text-lg  absolute text-black/80 bg-[#E0E0E0]'>or</p>
                </div>
                <div onClick={login}  className='w-full text-black my-4 font-semibold bg-[#E0E0E0] border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                <img src={google} className='h-6 mr-2'/>
                        Sign Up with Google
                </div>

            </div>

            <div className='w-full flex items-center justify-center'>
                <p className='text-sm font-normal text-[#060606]'>Have a account?<span className='font-semibold underline underline-offset-2 cursor-pointer'><Link to={"/login"}>Login</Link> </span></p>
            </div>

        </div>

    </div>
  )
}

export default Signup