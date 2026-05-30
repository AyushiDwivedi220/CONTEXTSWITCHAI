import API from "./api";

export const fetchTasks = async () => {
  const response = await API.get(
    "/api/tasks/"
  );

  return response.data;
};

export const createTask = async (
  taskData
) => {
  const response = await API.post(
    "/api/tasks/",
    taskData
  );

  return response.data;
};

export const updateTask = async (
  taskId,
  taskData
) => {
  const response = await API.patch(
    `/api/tasks/${taskId}/`,
    taskData
  );

  return response.data;
};

export const deleteTask = async (
  taskId
) => {
  await API.delete(
    `/api/tasks/${taskId}/`
  );

  return taskId;
};

export const getTask = async (
  taskId
) => {
  const response = await API.get(
    `/api/tasks/${taskId}/`
  );

  return response.data;
};