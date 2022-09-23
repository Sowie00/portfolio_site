const BASE_URL = "http://localhost:3000";

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/api/projects`);
  const json = await response.json();
  return json;
};

export const getProject = async (projectId) => {
  const response = await fetch(`${BASE_URL}/api/projects/${projectId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};
