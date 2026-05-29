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

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

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
          onClick={() => navigate("/tasks/create")}
        >
          Create Task
        </Button>
      </div>

      <StatsCards />

      <div className="mt-10">
        <AIInsights />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Tasks
        </h2>

        <TaskList />
      </div>
    </DashboardLayout>
  );
}