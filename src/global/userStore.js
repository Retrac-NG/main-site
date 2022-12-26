import create from 'zustand';
import { persist } from 'zustand/middleware';

// -- data to be stored in local storage -->
export const userLocalStore = create(
  persist(
    (set, get) => ({
      user: { isLoggedIn: false, token: null },
      setUser: (user) => set({ user }),
      setToken: (token) => set({ user: { ...get().user, token } }),
    }),
    { name: 'user-data' }
  )
);

// -- data to be stored session storage -->
export const userStore = create((set) => ({
  user: {},
  setUser: (user) => set({ user }),
  updateUser: (payload) =>
    set((state) => ({ user: { ...state.user, ...payload } })),
}));
