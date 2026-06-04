import API from "./api";

export const getProjects = async () => {
  const response = await API.get("/api/projects/");
  return response.data;
};

export const getProject = async (id) => {
  const response = await API.get(`/api/projects/${id}/`);
  return response.data;
};

export const getProjectsByWorkspace = async (
    workspaceId
  ) => {
    const response = await API.get(
      `/api/projects/?workspace=${workspaceId}`
    );
  
    return response.data;
  };

export const createProject = async (projectData) => {
  const response = await API.post(
    "/api/projects/",
    projectData
  );

  return response.data;
};

export const updateProject = async (
  id,
  projectData
) => {
  const response = await API.put(
    `/api/projects/${id}/`,
    projectData
  );

  return response.data;
};

export const deleteProject = async (id) => {
  const response = await API.delete(
    `/api/projects/${id}/`
  );

  return response.data;
};