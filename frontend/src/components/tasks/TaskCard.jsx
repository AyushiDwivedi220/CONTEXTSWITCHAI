import Card from "../ui/Card";
import PriorityBadge from "./PriorityBadge";

export default function TaskCard({ task }) {
  return (
    <Card className="hover:border-zinc-700 transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {task.title}
          </h3>

          <p className="text-zinc-400 mt-2">
            {task.description}
          </p>
        </div>

        <PriorityBadge priority={task.priority} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-zinc-500">
          Status: {task.status}
        </span>

        <button className="text-blue-400 hover:text-blue-300">
          View
        </button>
      </div>
    </Card>
  );
}