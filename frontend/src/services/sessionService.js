import API from "./api";

export const fetchSessions = async () => {
  const response = await API.get(
    "/api/sessions/"
  );

  return response.data;
};

export const createSession = async (
  sessionData
) => {
  const response = await API.post(
    "/api/sessions/",
    sessionData
  );

  return response.data;
};

export const updateSession = async (
  sessionId,
  sessionData
) => {
  const response = await API.patch(
    `/api/sessions/${sessionId}/`,
    sessionData
  );

  return response.data;
};

export const deleteSession = async (
  sessionId
) => {
  await API.delete(
    `/api/sessions/${sessionId}/`
  );

  return sessionId;
};

export const startSession = async (
  sessionId
) => {
  const response = await API.post(
    `/api/sessions/${sessionId}/start/`
  );

  return response.data;
};

export const stopSession = async (
  sessionId
) => {
  const response = await API.post(
    `/api/sessions/${sessionId}/stop/`
  );

  return response.data;
};