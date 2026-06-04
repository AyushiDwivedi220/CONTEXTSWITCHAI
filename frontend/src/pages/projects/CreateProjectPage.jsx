import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import ProjectForm from "../../components/projects/ProjectForm";
import useProjectStore from "../../store/projectStore";

export default function CreateProjectPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const workspaceId =
    searchParams.get("workspace");

  const {
    createProject,
    loading,
  } = useProjectStore();

  const handleSubmit = async (data) => {
    try {
      console.log("workspaceId:", workspaceId);
      console.log("Submitting data:", data);

      const result =
        await createProject(data);

      console.log(
        "Created:",
        result
      );

      if (workspaceId) {
        navigate(
          `/workspaces/${workspaceId}`
        );
      } else {
        navigate("/projects");
      }
    } catch (error) {
      console.error(
        "Create Project Error:",
        error
      );

      console.error(
        "Backend Response:",
        error.response?.data
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold">
          Create Project
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          Add a new project to one of your workspaces.
        </p>

        <div className="mt-10">
          <ProjectForm
            initialData={{
              workspace:
                workspaceId || "",
            }}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}