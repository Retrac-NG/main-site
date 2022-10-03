import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import LogoImg from '../../assets/logo/retrac-logo-2.png';
import AuthFooterComponent from '../../components/auth/AuthFooter.Component';

const Login = () => {
  /* ====== Input visibility state */
  const [eye, setEye] = useState(false);

  return (
    <div
      className='w-full h-screen flex items-center justify-center relative px-10'
      style={{
        background:
          "linear-gradient(to top, rgba(10,40,60,0.4), rgba(10,40,60,0.4)), url('https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60    ')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Head>
        <title>ReTrac NG | Login</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* ====== Login form */}
      <form className='w-full max-w-md h-auto bg-white rounded-xl shadow-2xl flex flex-col items-center py-20 px-6 gap-6'>
        {/* ====== logo */}
        <div className='w-64 h-16 relative'>
          <Image src={LogoImg} alt='logo' layout='fill' />
        </div>

        {/* ====== email input */}
        <input className='auth__input' placeholder='Email' />

        {/* ====== password input */}
        <span className='w-full relative flex items-center justify-center'>
          <input
            className='auth__input'
            placeholder='Password'
            type={eye ? 'text' : 'password'}
          />
          {eye ? (
            <EyeIcon
              className='auth__input-icon'
              onClick={() => setEye((state) => !state)}
            />
          ) : (
            <EyeSlashIcon
              className='auth__input-icon'
              onClick={() => setEye((state) => !state)}
            />
          )}
        </span>

        <div className='flex justify-between items-center w-full'>
          {/* ====== remember me  */}
          <span className='flex items-center px-2 gap-2 text-xs md:text-sm text-gray-700 font-regular font-secondary'>
            <input
              type='checkbox'
              name='remember-me'
              className='cursor-pointer rounded-lg border-gray-600 w-4 h-4 text-green-400'
            />
            <label for='remember-me'>Remember me</label>
          </span>

          {/* ====== forgot password */}
          <Link href='#' passHref>
            <a className='text-xs text-green-600 hover:text-green-500 transition-all duration-300 font-medium md:text-sm'>
              Forgot password?
            </a>
          </Link>
        </div>

        {/* ====== login btn */}
        <Link href='#' passHref>
          <a className='w-full text-center bg-green-500 py-2 rounded-lg shadow-lg text-gray-50 hover:bg-green-600 font-medium transition-all duration-300'>
            Login
          </a>
        </Link>

        {/* ====== switch to signup */}
        <p className='text-sm text-gray-700'>
          Don&apos;t have an account?&nbsp;&nbsp;&nbsp;
          <Link href='#' passHref>
            <a className='font-medium text-green-600'>Sign up</a>
          </Link>
        </p>
      </form>

      {/* ====== footer navigation */}
      <AuthFooterComponent />
    </div>
  );
};

export default Login;
