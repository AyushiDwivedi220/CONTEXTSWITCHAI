import { create } from "zustand";

import {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} from "../services/workspaceService";

const useWorkspaceStore = create((set) => ({
  workspaces: [],
  selectedWorkspace: null,

  loading: false,
  error: null,

  fetchWorkspaces: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const data =
        await getWorkspaces();

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

  fetchWorkspace: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const workspace =
        await getWorkspace(id);

      set({
        selectedWorkspace:
          workspace,
        loading: false,
      });

      return workspace;
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  createWorkspace: async (
    workspaceData
  ) => {
    try {
      const newWorkspace =
        await createWorkspace(
          workspaceData
        );

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
        workspaces:
          state.workspaces.map(
            (workspace) =>
              workspace.id ===
              workspaceId
                ? updatedWorkspace
                : workspace
          ),

        selectedWorkspace:
          state.selectedWorkspace
            ?.id === workspaceId
            ? updatedWorkspace
            : state.selectedWorkspace,
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
      await deleteWorkspace(
        workspaceId
      );

      set((state) => ({
        workspaces:
          state.workspaces.filter(
            (workspace) =>
              workspace.id !==
              workspaceId
          ),

        selectedWorkspace:
          state.selectedWorkspace
            ?.id === workspaceId
            ? null
            : state.selectedWorkspace,
      }));
    } catch (error) {
      set({
        error: error.message,
      });
    }
  },
}));

export default useWorkspaceStore;