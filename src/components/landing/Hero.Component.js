import React from 'react';
import Image from 'next/image';
import logoImg from '../../assets/logo/retrac-logo-2.png';

const HeroComponent = () => {
  return (
    <div
      className='hero__container'
      style={{
        background:
          "linear-gradient(to top, rgba(20,20,20,0.2), rgba(20,20,20,0.2)), url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* ====== Logo image */}
      <div className='h-24 w-96 relative items-center flex justify-center'>
        <Image src={logoImg} layout='fill' objectFit='cover' />
      </div>

      {/* ====== Description text */}
      <p className='text-center text-md lg:text-xl text-gray-100/90 xl:w-2/4 font-light '>
        A citizens driven tech initiative designed to facilitate the recovery of
        stolen items. devices with unique identification details (UIDs) can be
        reported and tracked
      </p>
    </div>
  );
};

export default HeroComponent;
