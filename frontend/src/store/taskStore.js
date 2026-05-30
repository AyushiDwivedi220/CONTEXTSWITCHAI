import { create } from "zustand";

import {
  fetchTasks as fetchTasksAPI,
  createTask as createTaskAPI,
  updateTask as updateTaskAPI,
  deleteTask as deleteTaskAPI,
} from "../services/taskService";

const useTaskStore = create((set) => ({
  tasks: [],

  loading: false,

  error: null,

  fetchTasks: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const tasks = await fetchTasksAPI();

      set({
        tasks,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  createTask: async (taskData) => {
    set({
      loading: true,
      error: null,
    });

    try {
      const newTask =
        await createTaskAPI(taskData);

      set((state) => ({
        tasks: [
          newTask,
          ...state.tasks,
        ],
        loading: false,
      }));

      return newTask;
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });

      throw error;
    }
  },

  updateTask: async (
    taskId,
    taskData
  ) => {
    try {
      const updatedTask =
        await updateTaskAPI(
          taskId,
          taskData
        );

      set((state) => ({
        tasks: state.tasks.map(
          (task) =>
            task.id === taskId
              ? updatedTask
              : task
        ),
      }));

      return updatedTask;
    } catch (error) {
      set({
        error: error.message,
      });

      throw error;
    }
  },

  deleteTask: async (taskId) => {
    try {
      await deleteTaskAPI(taskId);

      set((state) => ({
        tasks: state.tasks.filter(
          (task) =>
            task.id !== taskId
        ),
      }));
    } catch (error) {
      set({
        error: error.message,
      });

      throw error;
    }
  },
}));

export default useTaskStore;