import React from 'react';
import useUser from '../hooks/user/useUser';
import { userStore } from '../global/userStore';
import FooterComponent from '../components/lib/footer/footer';
import ProfileHeroComponent from '../components/lib/hero/ProfileHero';
import { useEffect } from 'react';

const ProfileLayout = ({ children }) => {
  const userFound = useUser();
  const { user } = userStore();

  // -- user not logged in and not found -->
  if (!user.isLoggedIn || !userFound)
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <h2 className='text-2xl font-primary font-bold text-indigo-500'>
          Loading...
        </h2>
      </div>
    );

  // -- else return the component -->
  return (
    <div className='w-full flex flex-col min-h-screen bg-gray-100 items-center'>
      {/* -- user logged in and found */}
      {user.isLoggedIn && userFound && (
        <>
          <ProfileHeroComponent />
          {children}
          <FooterComponent />
        </>
      )}
    </div>
  );
};

export default ProfileLayout;
