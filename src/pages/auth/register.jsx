import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { userStore } from '../../global/userStore';
import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/logo/retrac-logo-2.png';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import AuthFooterComponent from '../../components/lib/footer/AuthFooter';

const Register = () => {
  const router = useRouter();
  const [eye, setEye] = useState(false);
  const { setUser } = userStore();
  const [userDetails, setUserDetails] = useState({});
  const { data, error, isLoading, isSuccess, refetch, status } = useQuery(
    'user-sign-up',
    async () => axios.post('/api/v1/auth/signup', userDetails),
    {
      retyr: false,
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  // -- handle form on change -->
  const handleForm = (target) => (e) => {
    e.preventDefault();
    e.target.checkValidity();
    e.target.reportValidity();

    setUserDetails({
      ...userDetails,
      [target]: e.target.value,
    });
  };

  // -- handle create user -->
  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      userDetails.password === userDetails.re_password &&
      userDetails.password.length > 5
    ) {
      refetch();
    } else {
      alert("Passwords don't match");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.replace('/profile');
      setUser({ isLoggedIn: true, token: data.data.data });
      alert('✅ User created successfully');
    }

    if (error) console.error(error);
  }, [status, isLoading]);

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
          required
          className='auth__input'
          onChange={(e) => handleForm('email')(e)}
        />

        {/* Firstname input field */}
        <input
          type='text'
          placeholder='First Name'
          name='firstname'
          required
          className='auth__input'
          onChange={(e) => handleForm('first_name')(e)}
        />
        {/* last Name input field */}
        <input
          type='text'
          placeholder='Last Name'
          name='lastname'
          required
          className='auth__input'
          onChange={(e) => handleForm('last_name')(e)}
        />

        {/* other Name input field */}
        <input
          type='text'
          placeholder='Other Names'
          name='othername'
          className='auth__input'
          onChange={(e) => handleForm('other_name')(e)}
        />

        {/* phone input field */}
        <input
          type='number'
          placeholder='+234 XXX XXXX XXX'
          name='othername'
          minLength={11}
          required
          className='auth__input'
          onChange={(e) => handleForm('phone')(e)}
        />

        {/* ====== password input field */}
        <span className='w-full relative flex items-center justify-center'>
          <input
            className='auth__input'
            placeholder='Password'
            required
            type={eye ? 'text' : 'password'}
            onChange={(e) => handleForm('password')(e)}
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
            required
            type={eye ? 'text' : 'password'}
            onChange={(e) => handleForm('re_password')(e)}
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
        <button type='submit' className='w-full' onClick={handleSignup}>
          <p className='w-full text-center bg-green-500 py-2 rounded-lg shadow-lg text-gray-50 hover:bg-green-600 font-medium transition-all duration-300'>
            {isLoading ? 'loading...' : 'Sign up'}
          </p>
        </button>
        {/* Terms and Condition */}
        <p className='text-sm text-center text-gray-400/90'>
          by Signing up you agree to our &nbsp;
          <Link href='#' passHref>
            <a className='text-green-500 cursor-pointer text-sm font-medium'>
              Terms and Conditions
            </a>
          </Link>
          and our&nbsp;
          <Link href='#' passHref>
            <a className='text-green-500 cursor-pointer text-sm'>
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
