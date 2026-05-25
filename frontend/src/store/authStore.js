import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,

  login: (data) =>
    set({
      accessToken: data.access,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
    }),
}));

export default useAuthStore;