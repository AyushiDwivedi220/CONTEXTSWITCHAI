import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    {
      id: 1,
      title: "Build Authentication API",
      description: "Implement JWT authentication flow.",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Design Dashboard UI",
      description: "Improve dashboard responsiveness.",
      priority: "Medium",
      status: "Pending",
    },
  ],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
}));

export default useTaskStore;