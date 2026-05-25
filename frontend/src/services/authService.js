import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const loginUser = async (credentials) => {
  const response = await API.post("/token/", credentials);

  return response.data;
};