import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userStore, userLocalStore } from '../global/userStore';

const useUser = () => {
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
  return userFound;
};

export default useUser;
