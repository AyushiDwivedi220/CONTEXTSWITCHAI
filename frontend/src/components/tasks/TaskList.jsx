import TaskCard from "./TaskCard";
import useTaskStore from "../../store/taskStore";

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  const loading = useTaskStore(
    (state) => state.loading
  );

  const error = useTaskStore(
    (state) => state.error
  );

  if (loading) {
    return (
      <p className="mt-8">
        Loading tasks...
      </p>
    );
  }

  if (error) {
    return (
      <p className="mt-8 text-red-500">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="grid gap-6 mt-8">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}