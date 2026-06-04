import { useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectList from "../../components/projects/ProjectList";
import useProjectStore from "../../store/projectStore";

export default function ProjectsPage() {
  const {
    projects,
    loading,
    error,
    fetchProjects,
  } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <Link
          to="/projects/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Project
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <ProjectList projects={projects} />
    </div>
  );
}