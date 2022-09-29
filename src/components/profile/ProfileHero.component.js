import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import Logo from '../../assets/logo/retrac-logo-1.png';

const ProfileHeroComponent = () => {
  return (
    <div
      className='hero__container h-[45vh] lg:h-[50vh] min-h-[600px] py-14 relative'
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,40,60,0.85), rgba(10,40,60,0.85)), url('https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZXJzb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* ====== profile avatar */}
      <div className=' w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] bg-red-300 flex items-center justify-center rounded-full shadow-2xl relative overflow-hidden border border-gray-400'>
        <Image
          src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZXJzb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='profile-image'
        />
      </div>

      {/* ====== full name */}
      <h2 className='font-primary font-medium text-xl lg:text-2xl text-white'>
        Micheal Edith Johnson
      </h2>

      {/* ====== Statis section */}
      <div className='flex items-center justify-between gap-6 mt-10 w-full max-w-[500px]'>
        <div className='hero__stats-container'>
          <p className='hero__stats-value'>30</p>
          <p className='hero__stats-desc'>Items Reported</p>
        </div>

        <div className='hero__stats-container'>
          <p className='hero__stats-value'>14</p>
          <p className='hero__stats-desc'>Items Found</p>
        </div>

        <div className='hero__stats-container'>
          <p className='hero__stats-value'>3</p>
          <p className='hero__stats-desc'>Owned assets</p>
        </div>
      </div>

      {/* ====== logout */}
      <Link href='/' passHref>
        <a className='absolute text-red-400 font-regular text-xs lg:text-lg top-7 right-5 lg:right-10 items-center justify-center flex cursor-pointer hover:text-red-500 transoition-all duration-300 border border-red-400 hover:border-red-500 rounded-lg px-3  py-1 '>
          <PowerIcon className='w-5 h-5 inline-block mr-2' /> Logout
        </a>
      </Link>

      {/* ====== logo */}
      <div className='w-32 h-9 lg:w-44 lg:h-12 z-30 absolute top-7 left-7 cursor-pointer'>
        <Image src={Logo} alt='retrac-logo' layout='fill' />
      </div>
    </div>
  );
};

export default ProfileHeroComponent;
