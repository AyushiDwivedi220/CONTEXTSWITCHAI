import DashboardLayout from "../layouts/DashboardLayout";
import StatsCards from "../components/dashboard/StatsCards";
import AIInsights from "../components/dashboard/AIInsights";
import TaskList from "../components/tasks/TaskList";
import Button from "../components/ui/Button";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-zinc-400 mt-2">
            Here’s your productivity overview.
          </p>
        </div>

        <Button>
          Create Task
        </Button>
      </div>

      <StatsCards />

      <AIInsights />

      <div className="mt-10">
        <h2 className="text-2xl font-bold">
          Recent Tasks
        </h2>

        <TaskList />
      </div>
    </DashboardLayout>
  );
}