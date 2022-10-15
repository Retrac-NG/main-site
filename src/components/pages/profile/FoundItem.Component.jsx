import React, { useState } from 'react';
import RecentComponent from './Recent.component';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const FoundItemComponent = () => {
  const [community, setcommunity] = useState(true);
  const [founditem, setFounditem] = useState(false);
  const [reportitem, setReportitem] = useState(false);

  const handleFound = () => {
    setcommunity(false);
    setFounditem(true);
    setReportitem(false);
  };
  const handleReport = () => {
    setcommunity(false);
    setReportitem(true);
    setFounditem(false);
  };
  return (
    <div className='flex flex-col gap-5 items-center justify-center text-center'>
      <h1 className='landing__section-heading'>Report an Item</h1>

      {/* REPORT AND FOUND ----- FORM BELOW */}
      <form className='md:w-[60vw] w-[100vw ]m-auto md:min-h-[60vh] min-h-[100vh] p-9 border-2 border-gray-300 rounded-3xl flex flex-col gap-5 drop-shadow-2xl bg-slate-200 '>
        <div className='flex items-start font-bold font-primary text-2xl text-gray-500 '>
          <h2>Status:</h2>
        </div>
        <div className='flex items-center justify-between md:justify-evenly'>
          <div
            className='w-[20%] h-[20px] py-4 md:p-7 border-2 border-gray-600 md:border-gray-800 md:rounded-3xl flex items-center justify-center cursor-pointer bg-slate-400 rounded-2xl px-10 hover:bg-slate-700 text-white text-sm md:text-xl duration-300 ease-in drop-shadow-xl'
            onClick={handleReport}
          >
            <h2>Lost</h2>
          </div>

          <div
            className='w-[20%] h-[20px] py-4 md:p-7 border-2 border-gray-500 md:border-gray-800 md:rounded-3xl flex items-center justify-center cursor-pointer bg-slate-400 rounded-2xl px-10 hover:bg-slate-700 text-white text-sm md:text-xl duration-300 ease-indrop-shadow-xl'
            onClick={handleFound}
          >
            <h2>Found</h2>
          </div>
        </div>
        <div className={` ${community ? 'block' : 'hidden'}  `}>
          <RecentComponent />
        </div>
        {founditem && (
          <div className=' text-gray-700 text-2xl font-extrabold mt-5'>
            {/* FOUND FORM */}
            <h1>FOUND FORM BELOW</h1>
          </div>
        )}
        {reportitem && (
          <div className=' text-gray-700 text-2xl font-extrabold mt-5 '>
            {/* REPORT FORM BELOW */}
            <h1>REPORT FORM BELOW</h1>
          </div>
        )}
      </form>

      {/* End of form */}
    </div>
  );
};

export default FoundItemComponent;
