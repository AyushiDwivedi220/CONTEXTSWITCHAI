import TaskCard from "./TaskCard";

export default function TaskList() {
  const tasks = [
    {
      title: "Build Authentication API",
      description: "Implement JWT authentication flow.",
      priority: "High",
      status: "In Progress",
    },
    {
      title: "Design Dashboard UI",
      description: "Improve dashboard responsiveness.",
      priority: "Medium",
      status: "Pending",
    },
    {
      title: "Write Project Documentation",
      description: "Document frontend architecture.",
      priority: "Low",
      status: "Completed",
    },
  ];

  return (
    <div className="grid gap-6 mt-8">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}