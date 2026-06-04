import { useEffect, useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import ProjectForm from "../../components/projects/ProjectForm";

import useProjectStore from "../../store/projectStore";

export default function EditProjectPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    fetchProject,
    updateProject,
    loading,
  } = useProjectStore();

  const [project, setProject] =
    useState(null);

  useEffect(() => {
    const loadProject =
      async () => {
        try {
          const data =
            await fetchProject(id);

          setProject(data);
        } catch (error) {
          console.error(error);
        }
      };

    loadProject();
  }, [id]);

  if (!project) {
    return (
      <DashboardLayout>
        <p className="text-zinc-400">
          Loading project...
        </p>
      </DashboardLayout>
    );
  }

  const handleSubmit = async (
    formData
  ) => {
    try {
      await updateProject(
        id,
        formData
      );

      navigate(`/projects/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold">
          Edit Project
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          Update project information.
        </p>

        <div className="mt-10">
          <ProjectForm
            initialData={project}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}