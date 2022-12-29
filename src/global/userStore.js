import create from 'zustand';
import { persist } from 'zustand/middleware';

// -- data to be stored in local storage -->
export const userStore = create(
  persist(
    (set, get) => ({
      user: { isLoggedIn: false, token: null },
      setUser: (user) => set({ user }),
      setToken: (token) => set({ user: { ...get().user, token } }),
    }),
    { name: 'user-data' }
  )
);
