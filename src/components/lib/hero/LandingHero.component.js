import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import logoImg from '../../../assets/logo/retrac-logo-2.png';

const HeroComponent = ({ mainText, btnText }) => {
  return (
    <header
      className='hero__container'
      style={{
        background:
          "linear-gradient(to top, rgba(10,40,60,0.3), rgba(10,40,60,0.4)), url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* ====== Logo image */}
      <div className='h-20 w-80 relative items-center flex justify-center'>
        <Image src={logoImg} layout='fill' objectFit='cover' />
      </div>

      {/* ====== Description text */}
      <p className='text-center text-md lg:text-lg text-gray-200/90 xl:w-2/4 font-light font-secondary'>
        {mainText}
      </p>
      <Link href='#' passHref>
        <a className='landing__hero-btn group'>
          {btnText}
          <ArrowLongRightIcon className='landing__hero--btn-icon' />
        </a>
      </Link>
    </header>
  );
};

export default HeroComponent;

/* 
   
      
      */
