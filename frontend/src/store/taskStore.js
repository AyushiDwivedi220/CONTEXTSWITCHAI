import { create } from "zustand";
import { fetchTasks as fetchTasksAPI } from "../services/taskService";

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
}));

export default useTaskStore;