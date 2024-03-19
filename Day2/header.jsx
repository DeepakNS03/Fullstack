import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/flower.png'

const Header = () => {
  return (
    <nav className="bg-white w-full h-[100px] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 pt-8">
              <img src={logo} className='h-20 w-20'/>
              
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-baseline space-x-4 pt-7">
                <h1 className='font-bold text-[40px]'>ZenYoga</h1>
                <Link to="/terms" className="text-black font-bold hover:bg-purple-500 px-5 mt-2 py-2 text-[20px] rounded-md absolute right-48">T&C</Link>                
                <Link to="/signup" className="text-black font-bold hover:bg-purple-500 px-5 py-2 mt-2 text-[20px] rounded-md absolute right-72">Back</Link>                
                <Link to="/privacy" className="text-black font-bold hover:bg-purple-500 px-5 py-2 mt-2 text-[20px] rounded-md absolute right-14">Privacy</Link>                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
