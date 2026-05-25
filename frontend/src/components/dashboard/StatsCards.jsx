export default function StatsCards() {
    const stats = [
      {
        title: "Active Tasks",
        value: "12",
      },
      {
        title: "Completed",
        value: "48",
      },
      {
        title: "AI Suggestions",
        value: "7",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >
            <h3 className="text-zinc-400 text-sm">
              {item.title}
            </h3>
  
            <p className="text-3xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    );
  }