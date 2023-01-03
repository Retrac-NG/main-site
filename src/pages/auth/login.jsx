import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { userStore } from '../../global/userStore';
import LogoImg from '../../assets/logo/retrac-logo-2.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import AuthFooterComponent from '../../components/lib/footer/AuthFooter';

const Login = () => {
  const router = useRouter();
  const { setUser } = userStore();
  const [isError, setisError] = useState(false);
  const [eye, setEye] = useState(false); // input visibility state

  const { data, isLoading, isSuccess, error, refetch, status } = useQuery(
    'user-login',
    async () => await axios.post('/api/v1/auth/login', userDetails),
    {
      retry: false,
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  // -- handle form input change -->
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });
  const handleForm = (target) => (e) => {
    setisError(false);
    setUserDetails({
      ...userDetails,
      [target]: e.target.value,
    });
  };

  // -- auth handler -->
  const handleUserAuth = async (e) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    if (isSuccess) {
      setUser({ isLoggedIn: true, token: data.data.data });
      alert('✅ Login successful');
      router.replace('/profile');
    }

    if (error) console.error(error);
  }, [status]);

  return (
    <div
      className='w-full h-screen flex items-center justify-center relative px-10'
      style={{
        background:
          "linear-gradient(to top, rgba(10,40,60,0.4), rgba(10,40,60,0.4)), url('https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
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
      <form className='w-full max-w-md h-auto bg-white rounded-xl shadow-2xl flex flex-col items-center py-20 px-6 gap-6 relative'>
        {/* -- error message */}
        {error && (
          <p className='absolute top-5 text-red-500 font-medium'>
            Email or password incorrect
          </p>
        )}
        {/* ====== logo */}
        <div className='w-64 h-16 relative'>
          <Image src={LogoImg} alt='logo' layout='fill' />
        </div>

        {/* ====== email input */}
        <input
          className='auth__input'
          placeholder='Email'
          onChange={(e) => handleForm('email')(e)}
        />

        {/* ====== password input */}
        <span className='w-full relative flex items-center justify-center'>
          <input
            className='auth__input'
            placeholder='Password'
            type={!eye && 'password'}
            onChange={(e) => handleForm('password')(e)}
          />
          {eye ? (
            <EyeIcon
              className='auth__input-icon'
              onClick={() => setEye(false)}
            />
          ) : (
            <EyeSlashIcon
              className='auth__input-icon'
              onClick={() => setEye(true)}
            />
          )}
        </span>

        <div className='flex justify-between items-center w-full'>
          {/* ====== remember me  */}
          <span className='flex items-center px-2 gap-2 text-xs md:text-sm text-gray-700 font-regular font-secondary'>
            <input
              type='checkbox'
              name='remember-me'
              className='cursor-pointer rounded-sm shadow-sm border-green-400 w-4 h-4 ring-0 outline-none text-green-400 focus:ring-0'
            />
            <label htmlFor='remember-me'>Remember me</label>
          </span>

          {/* ====== forgot password */}
          <Link href='#' passHref>
            <a className='text-xs text-green-600 hover:text-green-500 transition-all duration-300 font-medium md:text-sm'>
              Forgot password?
            </a>
          </Link>
        </div>

        {/* ====== login btn */}
        <div onClick={handleUserAuth} className='w-full'>
          <p className='w-full text-center bg-green-500 py-2 rounded-lg shadow-lg text-gray-50 hover:bg-green-600 font-medium transition-all duration-300'>
            {isLoading ? 'loading...' : 'Login'}
          </p>
        </div>

        {/* ====== switch to signup */}
        <p className='text-sm text-gray-700'>
          Don&apos;t have an account?&nbsp;&nbsp;&nbsp;
          <Link href='register' passHref>
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
