import { useEffect } from "react";

import useWorkspaceStore from "../../store/workspaceStore";

import WorkspaceCard from "./WorkspaceCard";
import WorkspaceForm from "./WorkspaceForm";

const WorkspaceListPage = () => {
  const {
    workspaces,
    fetchWorkspaces,
    loading,
  } = useWorkspaceStore();

  useEffect(() => {
    fetchWorkspaces();
  }, [fetchWorkspaces]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">
        Workspaces
      </h1>

      <WorkspaceForm />

      <div className="space-y-4">
        {workspaces.length > 0 ? (
          workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
            />
          ))
        ) : (
          <p className="text-gray-500">
            No workspaces found.
          </p>
        )}
      </div>
    </div>
  );
};

export default WorkspaceListPage;