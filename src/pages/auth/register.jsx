import React, { useState } from 'react';
import Head from 'next/head';
import LogoImg from '../../assets/logo/retrac-logo-2.png';
import Image from 'next/image';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import AuthFooterComponent from '../../components/lib/footer/AuthFooter';

const Register = () => {
  const [eye, setEye] = useState(false);

  return (
    <div
      className='w-full h-screen flex items-center justify-center relative px-9'
      style={{
        background:
          "linear-gradient(to top, rgba(10,40,60,0.4), rgba(10,40,60,0.4)), url('https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Head>
        <title>ReTrac NG | Register</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <form className='flex flex-col gap-4 justify-center items-center w-full bg-slate-100 border-2 py-12 px-10 rounded-2xl max-w-md h-auto text-sm'>
        {/* Logo section */}
        <div className='w-64 h-16 relative'>
          <Image src={LogoImg} alt='logo' layout='fill' />
        </div>
        {/* Input Section */}
        {/* Email input field */}
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
        />

        {/* Firstname input field */}
        <input
          type='text'
          placeholder='First Name'
          name='firstname'
          className='auth__input'
        />
        {/* last Name input field */}
        <input
          type='text'
          placeholder='Last Name'
          name='lastname'
          className='auth__input'
        />

        {/* State input field*/}
        <input
          type='text'
          placeholder='State'
          name='state'
          className='auth__input'
        />

        {/* Local Government input field */}
        <input
          type='text'
          placeholder='LGA'
          name='lga'
          className='auth__input'
        />

        {/* ====== password input field */}
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

        {/* ======Confirm  password input field*/}
        <span className='w-full relative flex items-center justify-center'>
          <input
            className='auth__input'
            placeholder='Confirm Password'
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
        {/* Login button */}
        <Link href='#' passHref>
          <a className='w-full text-center bg-green-500 py-2 rounded-lg shadow-lg text-gray-50 hover:bg-green-600 font-medium transition-all duration-300'>
            Sign up
          </a>
        </Link>
        {/* Terms and Condition */}
        <p className='text-sm text-center text-gray-400/90'>
          by Signing up you agree to our &nbsp;
          <Link href='#' passHref>
            <a className='text-green-500 cursor-pointer text-sm font-medium'>
              Terms and Conditions{' '}
            </a>
          </Link>
          and our
          <Link href='#' passHref>
            <a className='text-green-500 cursor-pointer text-sm'>
              {' '}
              Privacy Policy
            </a>
          </Link>
        </p>

        {/* Already have an Account? */}
        <p className='text-sm text-center text-gray-500'>
          Already have an account?&nbsp;&nbsp;&nbsp;
          <Link href='/auth/login' passHref>
            <a className='text-green-500 cursor-pointer text-sm font-medium'>
              Login
            </a>
          </Link>
        </p>
      </form>
      {/* Footer section */}
      <AuthFooterComponent />
    </div>
  );
};

export default Register;
