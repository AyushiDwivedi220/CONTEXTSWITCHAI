import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const loginUser = async (credentials) => {

  console.log("BASE URL:", import.meta.env.VITE_API_BASE_URL);

  const response = await API.post(
    "/api/token/",
    credentials
  );

  return response.data;
};