import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchTasks = async () => {
  const response = await API.get(
    "/api/tasks/"
  );

  return response.data;
};

export const createTask = async (taskData) => {
  const response = await API.post(
    "/api/tasks/",
    taskData
  );

  return response.data;
};