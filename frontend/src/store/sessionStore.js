import { create } from "zustand";

import {
  fetchSessions as fetchSessionsAPI,
  createSession as createSessionAPI,
  updateSession as updateSessionAPI,
  deleteSession as deleteSessionAPI,
  startSession as startSessionAPI,
  stopSession as stopSessionAPI,
} from "../services/sessionService";

const useSessionStore = create(
  (set) => ({
    sessions: [],

    loading: false,

    error: null,

    fetchSessions: async () => {
      set({
        loading: true,
        error: null,
      });

      try {
        const sessions =
          await fetchSessionsAPI();

        set({
          sessions,
          loading: false,
        });
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });
      }
    },

    createSession: async (
      sessionData
    ) => {
      try {
        const newSession =
          await createSessionAPI(
            sessionData
          );

        set((state) => ({
          sessions: [
            newSession,
            ...state.sessions,
          ],
        }));

        return newSession;
      } catch (error) {
        set({
          error: error.message,
        });

        throw error;
      }
    },

    updateSession: async (
      sessionId,
      sessionData
    ) => {
      try {
        const updatedSession =
          await updateSessionAPI(
            sessionId,
            sessionData
          );

        set((state) => ({
          sessions:
            state.sessions.map(
              (session) =>
                session.id ===
                sessionId
                  ? updatedSession
                  : session
            ),
        }));

        return updatedSession;
      } catch (error) {
        set({
          error: error.message,
        });

        throw error;
      }
    },

    deleteSession: async (
      sessionId
    ) => {
      try {
        await deleteSessionAPI(
          sessionId
        );

        set((state) => ({
          sessions:
            state.sessions.filter(
              (session) =>
                session.id !==
                sessionId
            ),
        }));
      } catch (error) {
        set({
          error: error.message,
        });

        throw error;
      }
    },

    startSession: async (
      sessionId
    ) => {
      try {
        const updatedSession =
          await startSessionAPI(
            sessionId
          );

        set((state) => ({
          sessions:
            state.sessions.map(
              (session) =>
                session.id ===
                sessionId
                  ? updatedSession
                  : session
            ),
        }));
      } catch (error) {
        set({
          error: error.message,
        });

        throw error;
      }
    },

    stopSession: async (
      sessionId
    ) => {
      try {
        const updatedSession =
          await stopSessionAPI(
            sessionId
          );

        set((state) => ({
          sessions:
            state.sessions.map(
              (session) =>
                session.id ===
                sessionId
                  ? updatedSession
                  : session
            ),
        }));
      } catch (error) {
        set({
          error: error.message,
        });

        throw error;
      }
    },
  })
);

export default useSessionStore;