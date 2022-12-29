import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import Logo from '../../../assets/logo/retrac-logo-1.png';
import useUser from '../../../hooks/user/useUser';

const ProfileHeroComponent = () => {
  const router = useRouter();
  const { user: queryUser, loading } = useUser();
  const [user, setuser] = useState(queryUser);

  useEffect(() => {
    setuser(queryUser);
  }, [queryUser]);

  return (
    <div
      className='hero__container h-[45vh] lg:h-[50vh] min-h-[600px] py-14 relative px-10'
      style={
        user.profile_picture && {
          background: `linear-gradient(to bottom, rgba(10,40,60,0.85), rgba(10,40,60,0.85)), url('${user.profile_picture}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }
      }
    >
      {/* ====== profile avatar */}
      <div
        className=" w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] flex items-center justify-center rounded-full shadow-2xl relative overflow-hidden border border-gray-400 cursor-pointer transition-all duration-300 hover:shadow-2xl  after:content-['Profile'] after:w-full after:opacity-0 after:h-0 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 after:bg-black/70 after:flex after:items-center after:justify-center after:text-gray-200/90 hover:after:h-full hover:after:opacity-100"
        onClick={() => {
          router.push('/profile/settings');
        }}
      >
        {user.profile_picture && (
          <Image
            src={user.profile_picture}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            alt='profile-image'
          />
        )}
      </div>

      {/* ====== full name */}
      <h2 className='font-primary font-medium text-xl lg:text-2xl text-white'>
        {loading
          ? 'loading...'
          : `${user.first_name} ${user.other_name} ${user.last_name}`}
      </h2>

      {/* ====== Stats section */}
      <div className='flex items-center justify-between gap-6 mt-10 w-full max-w-[500px]'>
        <div className='hero__stats-container'>
          <p className='hero__stats-value'>{user.reported}</p>
          <p className='hero__stats-desc'>Items Reported</p>
        </div>

        <div className='hero__stats-container'>
          <p className='hero__stats-value'>{user.found}</p>
          <p className='hero__stats-desc'>Items Found</p>
        </div>

        <div className='hero__stats-container'>
          <p className='hero__stats-value'>{user.gedagets || 0}</p>
          <p className='hero__stats-desc'>Owned Gadgets</p>
        </div>

        <div className='hero__stats-container'>
          <p className='hero__stats-value'>{user.vehicles || 0}</p>
          <p className='hero__stats-desc'>Owned Vehicles</p>
        </div>
      </div>

      {/* ====== logout */}
      <Link href='/' passHref>
        <a className='absolute text-red-400 font-regular text-xs lg:text-lg top-7 right-5 lg:right-10 items-center justify-center flex cursor-pointer hover:text-red-500 transoition-all duration-300 border border-red-400 hover:border-red-500 rounded-lg px-3  py-[5px] '>
          <PowerIcon className='w-4 h-4 inline-block mr-2' /> Logout
        </a>
      </Link>

      {/* ====== logo */}
      <div
        className=' w-24 h-6 lg:w-40 lg:h-9 z-30 absolute top-7 left-3 lg:left-20 cursor-pointer'
        onClick={() => {
          router.back();
        }}
      >
        <Image src={Logo} alt='retrac-logo' layout='fill' />
      </div>
    </div>
  );
};

export default ProfileHeroComponent;
