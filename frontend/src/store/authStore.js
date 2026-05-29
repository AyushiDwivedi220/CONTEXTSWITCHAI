import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,

      accessToken: null,

      refreshToken: null,

      login: (data) =>
        set({
          accessToken: data.access,
          refreshToken: data.refresh,
        }),

      logout: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;