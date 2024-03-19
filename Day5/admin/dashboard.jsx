import React, { useState } from 'react';
import arrow from '../../assets/arrow-right.png';

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex'>

      <div className={`${open ? 'w-72' : 'w-30'} h-screen bg-slate-900 relative`}> 
        <img 
          src={arrow} 
          className={` ${!open ? 'w-7': 'w-15'}absolute cursor-pointer -right-3 top-9 w-7  rounded-full border-2 border-slate-900 `}
          onClick={() => setOpen(!open)}
          alt="Toggle Sidebar" 
        />
      </div>

      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        home
      </div>

    </div>
  );
}

export default Dashboard;
