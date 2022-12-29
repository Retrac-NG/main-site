import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScroll from '../../../hooks/useScroll';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

const NavBarComponent = () => {
  const router = useRouter();
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed flex transition-all z-50 duration-500 items-center justify-between  top-6 ${
        scrolled
          ? `bg-gray-100 w-[90%] lg:w-[65%] rounded-xl shadow-2xl h-16  px-8`
          : `w-full h-20 lg:h-24 px-8 lg:px-36 text-white`
      }`}
    >
      {/* ====== logo text */}
      <h3 className='font-bold text-xl'>ReTrac</h3>

      <div
        className={`opacity-0 lg:opacity-100 lg:flex gap-8 h-full items-center`}
      >
        {/* ====== Nav items */}

        {/* ====== Home */}
        <Link href='/' passHref>
          <a
            className={`nav__item ${
              scrolled ? `nav__item-scrolled` : 'nav__item'
            } ${router.pathname.indexOf('/about') === -1 && 'text-green-400'}`}
          >
            Home
          </a>
        </Link>

        {/* ====== About */}
        <Link href='about' passHref>
          <a
            className={`nav__item ${
              scrolled ? 'nav__item-scrolled' : 'nav__item'
            } ${router.pathname.indexOf('/about') !== -1 && 'text-green-400'}`}
          >
            About Us
          </a>
        </Link>

        {/* ====== COntact */}
        <p className={`${scrolled ? 'nav__item-scrolled' : 'nav__item'}`}>
          Contact
        </p>
      </div>

      {/* ====== call to actions */}
      <div className='hidden opacity-0 lg:opacity-100 lg:flex gap-5 h-full items-center'>
        <Link href='auth/login' passHref>
          <a className={`${scrolled ? 'nav__item-scrolled' : 'nav__item'}`}>
            Login
          </a>
        </Link>

        <Link href='auth/register' passHref>
          <a className='rounded-lg shadow-lg px-5 py-2 bg-gradient-to-br from-green-500 to-green-600 text-gray-100 font-bold text-sm'>
            Register
          </a>
        </Link>
      </div>

      {/* ====== Mobile nav */}
      <div
        className={`flex opacity-100 lg:hidden lg:opacity-0 items-center justify-center w-12 h-12 p-1 border rounded-lg shadow-lg cursor-pointer relative ${
          scrolled && 'border-gray-400'
        }`}
        onClick={() => setOpen((state) => !state)}
      >
        <Bars3BottomRightIcon
          className={`z-50  w-8 h-8 transition-all duration-300 ${
            scrolled ? 'text-gray-600' : 'text-gray-100'
          }`}
        />

        <div
          className={`flex flex-col py-8 px-3 items-center justify-between -translate-y-20 w-80 h-72 bg-white absolute right-0 -bottom-[18.5rem] rounded-lg shadow-xl transition-all duration-300 z-50 pointer-events-none ${
            open
              ? 'translate-y-1 opacity-100 pointer-events-auto'
              : 'opacity-0 '
          }`}
        >
          {/* ====== Nav items */}

          <div className='flex flex-col gap-4 items-center text-center'>
            {/* ====== Home */}
            <Link href='/' passHref>
              <a
                className={`nav__item-mobile ${
                  router.pathname.indexOf('/about') === -1 && 'text-green-600'
                }`}
                onClick={() => setOpen((state) => !state)}
              >
                Home
              </a>
            </Link>
            {/* ====== About */}
            <Link href='about' passHref>
              <a
                className={`nav__item-mobile  ${
                  router.pathname.indexOf('/about') !== -1 && 'text-green-400'
                }`}
                onClick={() => setOpen((state) => !state)}
              >
                About Us
              </a>
            </Link>
          </div>

          {/* ====== call to action */}
          <div className='w-full flex flex-col gap-2'>
            <Link href='auth/login' passHref>
              <a className='w-full border border-gray-500 rounded-lg py-3 text-gray-600 text-center hover:text-gray-800'>
                Login
              </a>
            </Link>

            <Link href='auth/register' passHref>
              <a className='w-full bg-gradient-to-b from-green-500 to-green-600 rounded-lg py-3 text-gray-100 text-center shadow-lg'>
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
