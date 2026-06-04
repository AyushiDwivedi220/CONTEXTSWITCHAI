import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import Button from "../../components/ui/Button";
import ProjectStatusBadge from "../../components/projects/ProjectStatusBadge";

import useProjectStore from "../../store/projectStore";

export default function ProjectsPage() {
  const navigate = useNavigate();

  const {
    projects,
    loading,
    error,
    fetchProjects,
  } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">
            Projects
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Organize and manage your projects.
          </p>
        </div>

        <Button
          onClick={() =>
            navigate("/projects/create")
          }
        >
          Create Project
        </Button>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            All Projects
          </h2>

          <span className="text-zinc-400 text-sm">
            {projects.length} Project
            {projects.length !== 1
              ? "s"
              : ""}
          </span>
        </div>

        {loading ? (
          <p className="text-zinc-400">
            Loading projects...
          </p>
        ) : error ? (
          <p className="text-red-500">
            {error}
          </p>
        ) : projects.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">
              No Projects Yet
            </h3>

            <p className="text-zinc-400 mt-2">
              Create your first project to get
              started.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">
                    {project.name}
                  </h3>

                  <ProjectStatusBadge
                    status={project.status}
                  />
                </div>

                <p className="text-zinc-400 mt-3">
                  {project.description ||
                    "No description provided."}
                </p>

                <p className="text-sm text-zinc-500 mt-4">
                  Created{" "}
                  {new Date(
                    project.created_at
                  ).toLocaleDateString()}
                </p>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() =>
                      navigate(
                        `/projects/${project.id}`
                      )
                    }
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      navigate(
                        `/projects/${project.id}/edit`
                      )
                    }
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}