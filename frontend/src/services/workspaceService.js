import API from "./api";


export const getWorkspaces = async () => {
  const response = await API.get("/api/workspaces/");
  return response.data;
};



export const createWorkspace = async (workspaceData) => {
  const response = await API.post(
    "/api/workspaces/",
    workspaceData
  );

  return response.data;
};

export const updateWorkspace = async (
    workspaceId,
    workspaceData
  ) => {
    const response = await API.patch(
      `/api/workspaces/${workspaceId}/`,
      workspaceData
    );
  
    return response.data;
  };


  export const getWorkspace = async (
    workspaceId
  ) => {
    const response =
      await API.get(
        `/api/workspaces/${workspaceId}/`
      );
  
    return response.data;
  };

  export const deleteWorkspace = async (
    workspaceId
  ) => {
    await API.delete(
      `/api/workspaces/${workspaceId}/`
    );
  };