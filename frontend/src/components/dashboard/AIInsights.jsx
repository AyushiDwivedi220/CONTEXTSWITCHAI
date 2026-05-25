import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function AIInsights() {
  return (
    <Card className="mt-8">
      <SectionTitle
        title="AI Insights"
        subtitle="Smart productivity recommendations"
      />

      <div className="space-y-4">
        <div className="bg-zinc-800 p-4 rounded-xl">
          Prioritize backend API integration this week.
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          You have 3 unfinished high-priority tasks.
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          AI recommends documenting frontend architecture.
        </div>
      </div>
    </Card>
  );
}