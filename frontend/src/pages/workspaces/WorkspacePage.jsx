import DashboardLayout from "../../layouts/DashboardLayout";
import WorkspaceListPage from "../../components/workspace/WorkspaceListPage";

export default function WorkspacePage() {
  return (
    <DashboardLayout>
      <WorkspaceListPage />
    </DashboardLayout>
  );
}