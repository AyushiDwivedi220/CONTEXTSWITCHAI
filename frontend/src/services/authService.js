import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const loginUser = async (credentials) => {

  const response = await API.post(
    "/api/token/",
    credentials
  );

  return response.data;
};

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