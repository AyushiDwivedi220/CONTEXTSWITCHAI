export default function AIInsights() {
    return (
      <div className="bg-zinc-900 mt-8 p-6 rounded-2xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">
          AI Insights
        </h2>
  
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
      </div>
    );
  }