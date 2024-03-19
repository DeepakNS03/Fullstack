import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-color text-white max-h-full pt-9'>
      <nav className='container flex list-none text-xl font-semibold'>
        <div className='flex gap-6'>
        <Link to='/user/aboutus'><li className='cursor-pointer text-2xl font-semibold text-white hover:text-purple-700 transition duration-300 ease-linear ml-20 '>About</li></Link>
        {/* <Link><li className='cursor-pointer text-2xl font-semibold text-white hover:text-purple-700 transition duration-300 ease-linear'>Classes</li></Link> */}
        <Link><li className='cursor-pointer text-2xl font-semibold text-white hover:text-purple-700 transition duration-300 ease-linear'>Prices</li></Link>
        </div>
        <a href="/user/home" className="cursor-pointer text-white hover:text-purple-700 transition duration-300 ease-linear font-bold text-center text-5xl w-full block -mt-4">Zen Yoga</a>
        <div className='flex gap-10'>
          <Link to='/academy'><li className='cursor-pointer text-2xl font-semibold text-white hover:text-purple-700 transition duration-300 ease-linear '>Academy</li></Link>
          {/* <Link to='/institutions'><li className='cursor-pointer text-2xl font-semibold text-white hover:text-purple-700 transition duration-300 ease-linear'>Enroll</li></Link> */}
          <Link to='/login'> <li className='cursor-pointer text-2xl font-semibold text-white hover:text-purple-700 transition duration-300 ease-linear mr-20 '>Login</li></Link>
        </div>
      </nav>
      </header>
    
    
    );
  };
  
  export default Navbar
