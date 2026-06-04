import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import useProjectStore from "../../store/projectStore";
import ProjectStatusBadge from "../../components/projects/ProjectStatusBadge";

export default function ProjectDashboardPage() {
  const { id } = useParams();

  const {
    selectedProject,
    fetchProject,
    loading,
    error,
  } = useProjectStore();

  useEffect(() => {
    fetchProject(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <p className="text-zinc-400">
          Loading project...
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

  if (!selectedProject) {
    return (
      <DashboardLayout>
        <p className="text-zinc-400">
          Project not found.
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold">
            {selectedProject.name}
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            {selectedProject.description ||
              "No description provided."}
          </p>
        </div>

        <ProjectStatusBadge
          status={selectedProject.status}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Created
          </h3>

          <p className="text-lg font-medium mt-2">
            {new Date(
              selectedProject.created_at
            ).toLocaleDateString()}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Last Updated
          </h3>

          <p className="text-lg font-medium mt-2">
            {new Date(
              selectedProject.updated_at
            ).toLocaleDateString()}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Workspace ID
          </h3>

          <p className="text-lg font-medium mt-2">
            {selectedProject.workspace}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-400">
            Status
          </h3>

          <div className="mt-3">
            <ProjectStatusBadge
              status={selectedProject.status}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-10">
        <Link
          to={`/projects/${id}/edit`}
          className="px-5 py-2 rounded-xl bg-yellow-500 text-white font-medium"
        >
          Edit Project
        </Link>

        <Link
          to="/projects"
          className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
        >
          Back
        </Link>
      </div>
    </DashboardLayout>
  );
}