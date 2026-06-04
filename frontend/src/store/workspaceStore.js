import { create } from "zustand";


import {
    getWorkspaces,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace,
  } from "../services/workspaceService";

const useWorkspaceStore = create((set) => ({
  workspaces: [],
  loading: false,
  error: null,

  fetchWorkspaces: async () => {
    try {
      set({ loading: true });

      const data = await getWorkspaces();

      set({
        workspaces: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  updateWorkspace: async (
    workspaceId,
    workspaceData
  ) => {
    try {
      const updatedWorkspace =
        await updateWorkspace(
          workspaceId,
          workspaceData
        );
  
      set((state) => ({
        workspaces: state.workspaces.map(
          (workspace) =>
            workspace.id === workspaceId
              ? updatedWorkspace
              : workspace
        ),
      }));
  
      return updatedWorkspace;
    } catch (error) {
      set({
        error: error.message,
      });
    }
  },

  deleteWorkspace: async (
    workspaceId
  ) => {
    try {
      await deleteWorkspace(workspaceId);
  
      set((state) => ({
        workspaces:
          state.workspaces.filter(
            (workspace) =>
              workspace.id !== workspaceId
          ),
      }));
    } catch (error) {
      set({
        error: error.message,
      });
    }
  },

  createWorkspace: async (workspaceData) => {
    try {
      const newWorkspace =
        await createWorkspace(workspaceData);

      set((state) => ({
        workspaces: [
          newWorkspace,
          ...state.workspaces,
        ],
      }));

      return newWorkspace;
    } catch (error) {
      set({
        error: error.message,
      });
    }
  },
}));



export default useWorkspaceStore;