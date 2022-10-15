import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ProfileItemCardComponent = ({ image, status, name }) => {
  const [statusClass, setStatusClass] = useState('bg-green-500');

  useEffect(() => {
    if (status === 'found') setStatusClass('bg-green-600');
    if (status === 'lost') setStatusClass('bg-red-500');
    if (status === 'misplaced') setStatusClass('bg-orange-500');
  }, []);

  return (
    <div className='fex flex-col h-96 rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 shadow-md w-full max-w-[300px] col-span-4 md:col-span-2 lg:col-span-1 bg-white overflow-hidden border-2 hover:shadow-gray-400 border-gray-200 hover:border-gray-300 relative items-center justify-center'>
      {/* ====== image section */}
      <div className='relative w-full h-full overflow-hidden rounded-2xl'>
        <Image
          src='https://images.unsplash.com/photo-1611316114443-78793040bc3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGRldmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='item image'
          objectFit='cover'
          objectPosition='bottom'
          layout='fill'
        />
      </div>

      {/* ====== Asset details */}
      <div className='flex flex-col px-4 py-3 w-[90%] h-1/2 bg-gradient-to-br from-white/10 to-white/20 absolute z-10 bottom-5 left-4 rounded-2xl bg-blend-multiply backdrop-blur-lg border border-gray-300/40 gap-4 igtems-center justify-center'>
        {/* ====== status */}
        <span
          className={`text-xs px-4 py-1 shadow-md inline w-min rounded-md text-white font-bold ${statusClass}`}
        >
          {status}
        </span>

        <ul className='list-disc ml-4'>
          <li className=' text-white font-secondary text-sm'>Asus Laptop</li>
          <li className=' text-white font-secondary text-sm'>Blue</li>
          <li className=' text-white font-secondary text-sm'>Jabi</li>
        </ul>

        <Link href='#' passHref>
          <a className='landing__hero-btn w-[140px] group text-sm gap-3 px-3 border-gray-300/60'>
            View
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProfileItemCardComponent;
