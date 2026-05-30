import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import StatsCards from "../components/dashboard/StatsCards";
import AIInsights from "../components/dashboard/AIInsights";
import TaskList from "../components/tasks/TaskList";
import Button from "../components/ui/Button";

import useTaskStore from "../store/taskStore";

export default function DashboardPage() {
  const navigate = useNavigate();

  const fetchTasks = useTaskStore(
    (state) => state.fetchTasks
  );

  const tasks = useTaskStore(
    (state) => state.tasks
  );

  const loading = useTaskStore(
    (state) => state.loading
  );

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Your productivity ecosystem at a glance.
          </p>
        </div>

        <Button
          onClick={() =>
            navigate("/tasks/create")
          }
        >
          Create Task
        </Button>
      </div>

      {/* Soon this will use real task stats */}
      <StatsCards tasks={tasks} />

      <div className="mt-10">
        <AIInsights />
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            Recent Tasks
          </h2>

          <span className="text-zinc-400 text-sm">
            {tasks.length} Task
            {tasks.length !== 1 ? "s" : ""}
          </span>
        </div>

        {loading ? (
          <p className="text-zinc-400">
            Loading tasks...
          </p>
        ) : (
          <TaskList />
        )}
      </div>
    </DashboardLayout>
  );
}