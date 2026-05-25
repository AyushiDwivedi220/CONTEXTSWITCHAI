import DashboardLayout from "../layouts/DashboardLayout";
import StatsCards from "../components/dashboard/StatsCards";
import AIInsights from "../components/dashboard/AIInsights";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mt-2">
          Here’s your productivity overview.
        </p>

        <StatsCards />

        <AIInsights />
      </div>
    </DashboardLayout>
  );
}