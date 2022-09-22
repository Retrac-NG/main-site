import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import logoImg from '../../assets/logo/retrac-logo-2.png';

const HeroComponent = () => {
  return (
    <div
      className='hero__container'
      style={{
        background:
          "linear-gradient(to top, rgba(10,30,60,0.3), rgba(10,30,60,0.3)), url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
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
      <Link href='#' passHref>
        <a className='landing__hero-btn group'>
          Explore{' '}
          <ArrowLongRightIcon className='inline-block w-6 h-4 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
        </a>
      </Link>
    </div>
  );
};

export default HeroComponent;

/* 
   
      
      */
