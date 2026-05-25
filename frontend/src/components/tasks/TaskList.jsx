import TaskCard from "./TaskCard";
import useTaskStore from "../../store/taskStore";

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="grid gap-6 mt-8">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}