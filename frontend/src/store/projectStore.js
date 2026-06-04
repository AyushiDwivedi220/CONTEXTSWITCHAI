import { create } from "zustand";

import {
  getProjects,
  getProjectsByWorkspace,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

const useProjectStore = create((set) => ({
  projects: [],
  workspaceProjects: [],
  selectedProject: null,

  loading: false,
  error: null,

  fetchProjects: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const projects =
        await getProjects();

      set({
        projects,
        loading: false,
      });
    } catch (error) {
      set({
        error:
          error.response?.data?.detail ||
          "Failed to fetch projects",
        loading: false,
      });
    }
  },

  fetchProjectsByWorkspace:
    async (workspaceId) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const projects =
          await getProjectsByWorkspace(
            workspaceId
          );

        set({
          workspaceProjects:
            projects,
          loading: false,
        });
      } catch (error) {
        set({
          error:
            error.response?.data
              ?.detail ||
            "Failed to fetch workspace projects",
          loading: false,
        });
      }
    },

  fetchProject: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const project =
        await getProject(id);

      set({
        selectedProject:
          project,
        loading: false,
      });

      return project;
    } catch (error) {
      set({
        error:
          error.response?.data?.detail ||
          "Failed to fetch project",
        loading: false,
      });

      throw error;
    }
  },

  createProject: async (
    projectData
  ) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const newProject =
        await createProject(
          projectData
        );

      set((state) => ({
        projects: [
          newProject,
          ...state.projects,
        ],

        workspaceProjects: [
          newProject,
          ...state.workspaceProjects,
        ],

        loading: false,
      }));

      return newProject;
    } catch (error) {
      set({
        error:
          error.response?.data?.detail ||
          "Failed to create project",
        loading: false,
      });

      throw error;
    }
  },

  updateProject: async (
    id,
    projectData
  ) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const updatedProject =
        await updateProject(
          id,
          projectData
        );

      set((state) => ({
        projects:
          state.projects.map(
            (project) =>
              project.id === id
                ? updatedProject
                : project
          ),

        workspaceProjects:
          state.workspaceProjects.map(
            (project) =>
              project.id === id
                ? updatedProject
                : project
          ),

        selectedProject:
          state.selectedProject?.id ===
          id
            ? updatedProject
            : state.selectedProject,

        loading: false,
      }));

      return updatedProject;
    } catch (error) {
      set({
        error:
          error.response?.data?.detail ||
          "Failed to update project",
        loading: false,
      });

      throw error;
    }
  },

  deleteProject: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await deleteProject(id);

      set((state) => ({
        projects:
          state.projects.filter(
            (project) =>
              project.id !== id
          ),

        workspaceProjects:
          state.workspaceProjects.filter(
            (project) =>
              project.id !== id
          ),

        selectedProject:
          state.selectedProject?.id ===
          id
            ? null
            : state.selectedProject,

        loading: false,
      }));
    } catch (error) {
      set({
        error:
          error.response?.data?.detail ||
          "Failed to delete project",
        loading: false,
      });

      throw error;
    }
  },

  setSelectedProject: (
    project
  ) =>
    set({
      selectedProject: project,
    }),

  clearSelectedProject: () =>
    set({
      selectedProject: null,
    }),

  clearError: () =>
    set({
      error: null,
    }),
}));

export default useProjectStore;