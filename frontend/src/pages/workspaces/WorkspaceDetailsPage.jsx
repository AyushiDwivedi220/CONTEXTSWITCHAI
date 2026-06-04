import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import useWorkspaceStore from "../../store/workspaceStore";
import useProjectStore from "../../store/projectStore";

export default function WorkspaceDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    selectedWorkspace,
    fetchWorkspace,
    loading: workspaceLoading,
    error,
  } = useWorkspaceStore();

  const {
    workspaceProjects,
    fetchProjectsByWorkspace,
  } = useProjectStore();

  useEffect(() => {
    fetchWorkspace(id);
    fetchProjectsByWorkspace(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const activeProjects =
    workspaceProjects.filter(
      (project) =>
        project.status === "active"
    );

  const completedProjects =
    workspaceProjects.filter(
      (project) =>
        project.status ===
        "completed"
    );

  if (workspaceLoading) {
    return (
      <DashboardLayout>
        <p className="text-zinc-400">
          Loading workspace...
        </p>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <p className="text-red-500">
          {error}
        </p>
      </DashboardLayout>
    );
  }

  if (!selectedWorkspace) {
    return (
      <DashboardLayout>
        <p className="text-zinc-400">
          Workspace not found.
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div>
        <h1 className="text-5xl font-bold">
          {selectedWorkspace.name}
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          {selectedWorkspace.description}
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Projects
          </h3>

          <p className="text-3xl font-bold mt-2">
            {
              workspaceProjects.length
            }
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Active Projects
          </h3>

          <p className="text-3xl font-bold mt-2">
            {
              activeProjects.length
            }
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Completed
          </h3>

          <p className="text-3xl font-bold mt-2">
            {
              completedProjects.length
            }
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Projects
            </h2>

            <p className="text-zinc-400 mt-1">
              Projects belonging to this
              workspace.
            </p>
          </div>

          <button
            onClick={() =>
              navigate(
                `/projects/create?workspace=${id}`
              )
            }
            className="
              bg-blue-600
              hover:bg-blue-700
              px-4
              py-2
              rounded-lg
              text-white
              transition
            "
          >
            Create Project
          </button>
        </div>

        {workspaceProjects.length === 0 ? (
          <div
            className="
              mt-6
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-8
            "
          >
            <p className="text-zinc-400">
              No projects found in this
              workspace.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {workspaceProjects.map(
              (project) => (
                <div
                  key={project.id}
                  className="
                    bg-zinc-900
                    border
                    border-zinc-800
                    rounded-2xl
                    p-6
                    hover:border-blue-500/40
                    transition
                  "
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {project.name}
                      </h3>

                      <p className="text-zinc-400 mt-2">
                        {
                          project.description
                        }
                      </p>
                    </div>

                    <span
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-blue-500/20
                        text-blue-300
                      "
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() =>
                        navigate(
                          `/projects/${project.id}`
                        )
                      }
                      className="
                        bg-zinc-800
                        hover:bg-zinc-700
                        px-4
                        py-2
                        rounded-lg
                        text-white
                        transition
                      "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}