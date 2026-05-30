import API from "./api";

export const loginUser = async (
  credentials
) => {
  const response = await API.post(
    "/api/token/",
    credentials
  );

  return response.data;
};