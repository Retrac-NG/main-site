import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { userLocalStore, userStore } from '../global/userStore';
import FooterComponent from '../components/lib/footer/footer';
import ProfileHeroComponent from '../components/lib/hero/ProfileHero';

const ProfileLayout = ({ children }) => {
  /* 
  PROCESS
   get user stats from storage
   change found status to true
   else if token has expired go back to login
  */

  const router = useRouter();
  const { setUser, user: localUser } = userStore();
  const { user } = userLocalStore();
  const [userFound, setUserFound] = useState(false);

  // -- check if user is loggedIn -->
  useEffect(() => {
    // -- if no user then go back to login -->
    if (!user.isLoggedIn) router.replace('/auth/login');

    // -- if user then get user -->
    if (user.isLoggedIn === true) {
      (async () => {
        try {
          const data = await axios.post('/api/v1/decode', {
            token: user.token,
          });
          setUser(data.data.data);
          setUserFound(true);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [localUser.token]);

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

      {/* -- user logged in but not found */}
      {user.isLoggedIn && !userFound && (
        <div className='w-full h-screen flex items-center justify-center'>
          <h2 className='text-2xl font-primary font-bold text-green-700'>
            Loading...
          </h2>
        </div>
      )}

      {/* -- no user logged in */}
      {!user.iusLoggedIn && (
        <div className='w-full h-screen flex items-center justify-center'>
          <p className='text-2xl font-primary font-bold text-red-600'>
            No User Found
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileLayout;
