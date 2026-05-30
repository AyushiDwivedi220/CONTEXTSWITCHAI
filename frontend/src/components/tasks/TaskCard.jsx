import Card from "../ui/Card";
import PriorityBadge from "./PriorityBadge";

import useTaskStore from "../../store/taskStore";

export default function TaskCard({ task }) {
  const updateTask = useTaskStore(
    (state) => state.updateTask
  );

  const deleteTask = useTaskStore(
    (state) => state.deleteTask
  );

  const handleComplete = async () => {
    try {
      await updateTask(task.id, {
        status: "COMPLETED",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
    } catch (error) {
      console.error(error);
    }
  };

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

        <PriorityBadge
          priority={task.priority}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <span className="text-sm text-zinc-500">
          Status: {task.status}
        </span>

        <span className="text-sm text-zinc-500">
          Age: {task.age} day(s)
        </span>

        {task.due_date && (
          <span className="text-sm text-zinc-500">
            Due: {task.due_date}
          </span>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        {task.status !==
          "COMPLETED" && (
          <button
            onClick={handleComplete}
            className="
              px-4
              py-2
              rounded-lg
              bg-green-500
              hover:bg-green-600
              text-white
              text-sm
              transition
            "
          >
            Complete
          </button>
        )}

        <button
          onClick={handleDelete}
          className="
            px-4
            py-2
            rounded-lg
            bg-red-500
            hover:bg-red-600
            text-white
            text-sm
            transition
          "
        >
          Delete
        </button>
      </div>
    </Card>
  );
}