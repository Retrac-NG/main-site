import axios from 'axios';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userStore } from '../../global/userStore';

const useUser = () => {
  /* 
  PROCESS
   get user stats from storage
   change found status to true
   else if token has expired go back to login
  */

  const router = useRouter();
  const { user } = userStore();
  const [response, setResponse] = useState({});
  const [userFound, setUserFound] = useState(false);

  // -- use react query -->
  const { data, isLoading, error, isSuccess } = useQuery(
    'auto-get-user',
    async () =>
      await axios.post('/api/v1/decode', {
        token: user.token,
      })
  );

  // -- check if user is loggedIn -->
  useEffect(() => {
    // -- if no user then go back to login -->
    if (!user.isLoggedIn) router.replace('/auth/login');

    // -- if user then get user -->
    if (data && user.isLoggedIn === true) {
      setResponse(data.data.data);
      setUserFound(true);
    }
  });

  return {
    found: userFound,
    user: response,
    isLoading,
    error,
  };
};

export default useUser;
